var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "hello there",
    user: "obi",
    added: new Date(),
  },
  {
    text: "general kenobi",
    user: "grievous",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "Form" });
});

module.exports = router;
