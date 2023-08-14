const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:27017/admin")
    .then(() => console.log("Connected to db!"))
    .catch((err) => console.log("Failed to connect"));
}

module.exports = { connect };
