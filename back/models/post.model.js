const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: "string",
      required: true,
    },
    message: {
      type: "string",
      trim: true,
      maxLength: 500,
    },
    picture: {
      type: "string",
    },
    video: {
      type: "string",
    },
    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;
