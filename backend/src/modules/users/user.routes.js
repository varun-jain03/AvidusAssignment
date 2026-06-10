// Dependencies 
const express = require("express");

// File Imports
const { getAllUsers } = require("./user.controller.js");

const userRouter = express.Router();


// Get All The Users
userRouter.get("/", getAllUsers);


module.exports = userRouter;