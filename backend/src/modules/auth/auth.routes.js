// Dependencies 
const express = require("express");

// file I,port
const { register, login } = require("./auth.controller.js");

const authRouter = express.Router();

authRouter.post("/register", register);              // REGISTERING A NEW USER
authRouter.post("/login", login);                    // LOGGING IN EXISTING USER



module.exports = authRouter;