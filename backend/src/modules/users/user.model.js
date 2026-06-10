// Dependencies
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required."],
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email Is Required."],
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, "Password Is Required."]
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User"
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active"
    }
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;