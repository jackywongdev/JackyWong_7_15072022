const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");
require("dotenv").config();

module.exports.getUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  console.log(req.params);
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown:" + req.params.id);
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown:" + err);
  }).select("-password");
};

module.exports.updateUserPicture = async (req, res) => {
  try {
    const userObject = req.file
      ? { picture: `./images/profil/${req.file.filename}` }
      : { ...req.body };

    await UserModel.findOneAndUpdate(
      { _id: req.body._id },
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
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown:" + req.params.id);
  try {
    await UserModel.findById({ _id: req.params.id }).then((user) => {
      const filename = user.picture.split("/images/profil/")[1];
      fs.unlink(`images/profil/${filename}`, () => {
        UserModel.deleteOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Utilisateur Supprimé" });
      });
    });
  } catch {
    return res.status(400).send(err);
  }
};
