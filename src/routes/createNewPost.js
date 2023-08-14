const personalposts = require("../module/personalPage");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  console.log("req.body: ", req.body);
  //   const reqBody = JSON.stringify(req.body);
  //   const newBody = JSON.stringify(req.body).slice(2, reqBody.length - 2);
  //   console.log({ newBody });
  const createposts = new personalposts(req.body);
  createposts
    .save()
    .then(() => {
      res.header("Content-Security-Policy", "default-src 'self' data");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST");
      res.status(200).json({ message: "create succsess", body: req.body });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
