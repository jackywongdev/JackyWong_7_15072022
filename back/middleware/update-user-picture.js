const multer = require("multer");
const UserModel = require("../models/user.model");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../front/public/images/profil");
  },
  filename: (req, file, callback) => {
    const name = req.body.pseudo;
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("file");
