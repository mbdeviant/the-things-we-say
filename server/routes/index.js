var express = require("express");
var router = express.Router();
const { getMessages } = require("../db");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");

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

router.post(
  "/",
  [body("username").trim().escape(), body("message").trim().escape()],
  async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.redirect("/");
    }

    try {
      const { username, message } = req.body;
      const date = new Date();
      const newMessage = new Message({
        username,
        text: message,
        date,
      });

      await newMessage.save();
      res.redirect("/");
    } catch (error) {
      console.error(error);
      return res.redirect("/");
    }
  }
);

module.exports = router;
