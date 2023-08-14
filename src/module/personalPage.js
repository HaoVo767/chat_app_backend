const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalPostSchema = new Schema(
  {
    uid: String,
    creator: { type: String },
    postContent: { type: String },
    media: [{ type: String }],
    // comment: [{ name: String, content: String, photoURL: String }],
    heart: [{ name: String, photoURL: String, uid: String }],
    comment: [{ name: String, content: String, photoURL: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("personalposts", personalPostSchema);
