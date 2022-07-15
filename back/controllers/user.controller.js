const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
require("dotenv").config();

//création et connection

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new UserModel({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
      console.log("Utilisateur créé !");
    })
    .catch((error) => res.status(500).json({ error }));
};

//Connexion à un compte existant

exports.login = (req, res, next) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//autres

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  console.log(req.params);
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown:" + req.params.id);
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown:" + err);
  }).select("-password");
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    const userObject = req.file
      ? {
          picture: `${req.protocol}://${req.get("host")}/images/profil/${
            req.file.filename
          }`,
        }
      : { ...req.body };

    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...userObject } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);

  await UserModel.findById({ _id: req.params.id }).then((user) => {
    const filename = user.picture.split("/images/profil/")[1];
    fs.unlink(`images/profil/${filename}`, () => {
      UserModel.deleteOne({ _id: req.params.id }).exec();
      res.status(200).json({ message: "Utilisateur Supprimé" });
    });
  });
};
module.exports.follow = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToFollow)
  )
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    // add to the follower list
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { following: req.body.idToFollow } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).jsos(err);
      }
    );
    // add to following list
    await UserModel.findByIdAndUpdate(
      req.body.idToFollow,
      { $addToSet: { followers: req.params.id } },
      { new: true, upsert: true },
      (err, docs) => {
        // if (!err) res.status(201).json(docs);
        if (err) return res.status(400).jsos(err);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.unfollow = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToUnfollow)
  )
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.idToUnfollow } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).jsos(err);
      }
    );
    // remove to following list
    await UserModel.findByIdAndUpdate(
      req.body.idToUnfollow,
      { $pull: { followers: req.params.id } },
      { new: true, upsert: true },
      (err, docs) => {
        if (err) return res.status(400).jsos(err);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
