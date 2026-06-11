// Dependencies 
const express = require("express");

// File importy
const { create, getMy, getAll, update, deleting } = require("./task.controller.js");
const authMiddleware = require("../../middleware/auth.middleware.js");
const adminMiddleware = require("../../middleware/admin.middleware.js");

const taskRouter = express.Router();

// Creating A New Task 
taskRouter.post(
  "/",
  authMiddleware,
  create
);

// Getting All My Tasks 
taskRouter.get(
  "/",
  authMiddleware,
  getMy
);

// Getting All the Task Including created by others (ADMIN onlt)
taskRouter.get(
  "/all",
  authMiddleware,
  adminMiddleware,
  getAll
);

// Updateing The Details Of The Specific Task By its Task ID (DYNAMIC router)
taskRouter.patch(
  "/:id",
  authMiddleware,
  update
);

// Deletying a task (DYNAMIC router)
taskRouter.delete(
  "/:id",
  authMiddleware,
  deleting
);



module.exports = taskRouter;