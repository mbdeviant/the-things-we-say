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
  [
    body("username")
      .trim()
      .isLength({ max: 40 })
      .withMessage("Username must be 40 characters or fewer."),
    body("message")
      .trim()
      .isLength({ max: 280 })
      .withMessage("Message must be 280 characters or fewer."),
  ],
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
