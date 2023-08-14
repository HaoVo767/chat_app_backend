const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const iconsSchem = new Schema({
  listIcons: { type: Array },
});

module.exports = mongoose.model("icons", iconsSchem);
