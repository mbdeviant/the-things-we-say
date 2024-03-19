const mongoose = require("mongoose");
const Message = require("./models/message");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("successfully connected to database");
  } catch (error) {
    console.error("database connection failed:", error);
  }
};

const getMessages = async () => {
  try {
    const allMessages = await Message.find();
    return allMessages;
  } catch (error) {
    console.log("failed retrieveing messages", error);
  }
};

module.exports = { connectDB, getMessages };
