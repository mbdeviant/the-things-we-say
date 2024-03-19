const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  username: { type: String, default: "Anonymous" },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Message", messageSchema);
