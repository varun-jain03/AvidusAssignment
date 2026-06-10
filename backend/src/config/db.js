// Dependencies
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected To Mongo DB")
  } catch (error) {
    console.log("MongoDB connection failed:", error.massage);
  }
}

module.exports = connectDB;