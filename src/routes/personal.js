const personalposts = require("../module/personalPage");
const express = require("express");
const router = express.Router();

router.get("/:uid", (req, res) => {
  personalposts
    .find({ uid: req.params.uid })
    .sort({ createdAt: -1 })
    .then(function (item) {
      res.header("Content-Security-Policy", "default-src 'self' data");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(200);
      res.send(item);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
