// const mongoose = require("mongoose");

// function connect() {
//   mongoose
//     .connect("mongodb://localhost:27017/admin")
//     .then(() => console.log("Connected to db!"))
//     .catch((err) => console.log("Failed to connect"));
// }

// module.exports = { connect };

const mongoose = require("mongoose");
const uri = "mongodb+srv://minhhao767:KoOe3lFnNZIXGBbP@cluster0.m73rtd1.mongodb.net/?retryWrites=true&w=majority";

function connect() {
  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("Connected to db!"))
    .catch((err) => console.log("Failed to connect"));
}

module.exports = { connect };
