// Dependencies 
const express = require("express");

// File Imports
const { getAllUsers, deleting, update } = require("./user.controller.js");
const authMiddleware = require("../../middleware/auth.middleware.js");
const adminMiddleware = require("../../middleware/admin.middleware.js");

const userRouter = express.Router();

// middlewares
userRouter.use(authMiddleware);
userRouter.use(adminMiddleware);

// Get All The Users
userRouter.get("/getAll", getAllUsers);
userRouter.delete("/:id", deleting);
userRouter.patch("/:id/status", update);

module.exports = userRouter;