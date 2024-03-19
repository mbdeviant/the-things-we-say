var express = require("express");
var router = express.Router();
const { getMessages } = require("../db");

const messages = getMessages();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages: messages });
});

router.post("/", function (req, res, next) {
  const message = req.body.message;
  const username = req.body.username;

  messages.push({ text: message, user: username, added: new Date() });
  res.redirect("/");
});

module.exports = router;
