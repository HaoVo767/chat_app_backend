const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const db = require("./config/db.js");
const route = require("./routes");
var cors = require("cors");

db.connect();

app.get("/", function (req, res) {
  res.send({ author: "Hao" });
});
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
route(app);
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
