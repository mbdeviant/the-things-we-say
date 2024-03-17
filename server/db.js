const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to database");
  } catch (error) {
    console.error("database connection failed:", error);
  }
};

module.exports = connectDB;
