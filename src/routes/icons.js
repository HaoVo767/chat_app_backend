const icons = require("../module/icons");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  icons
    .findOne({})
    .then(function (icon) {
      res.header("Content-Security-Policy", "default-src 'self' data");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(200);
      res.send(icon);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
