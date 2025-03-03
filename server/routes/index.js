var express = require("express");
var router = express.Router();
const { getMessages } = require("../db");
const Message = require("../models/message");

router.get("/", async function (req, res, next) {
  try {
    const messages = await getMessages();
    res.render("index", {
      title: "Posts",
      messages: messages,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const username = req.body.username;
    const message = req.body.message;
    const date = new Date();

    const newMessage = new Message({
      username: username,
      text: message,
      date: date,
    });

    await newMessage.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
