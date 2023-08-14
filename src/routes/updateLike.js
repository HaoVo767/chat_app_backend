const personalposts = require("../module/personalPage");
const express = require("express");
const router = express.Router();

router.post("/:_id", (req, res) => {
  personalposts
    .find({ _id: req.params._id })
    .then((post) => {
      var list = post[0].heart;
      console.log(list);
      res.header("Content-Security-Policy", "default-src 'self' data");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST");
      if (list.length > 0) {
        list.map((item) => {
          if (item?.uid === req.body.uid) {
            return (list = list.filter((item) => item?.uid !== req.body.uid));
          }
          return list.push(req.body);
        });
      } else {
        list.push(req.body);
      }
      console.log("after filter", list);
      personalposts
        .findOneAndUpdate({ _id: req.params._id }, { heart: list }, { new: true })
        .then(() => res.status(200).json(list));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
