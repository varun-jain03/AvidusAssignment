// Dependencies 
const express = require("express");

// File Imports
const { getAllUsers } = require("./user.controller.js");
const authMiddleware = require("../../middleware/auth.middleware.js");
const adminMiddleware = require("../../middleware/admin.middleware.js");

const userRouter = express.Router();


// Get All The Users
userRouter.get(
  "/getAll",
  authMiddleware,
  adminMiddleware,
  getAllUsers
);


module.exports = userRouter;