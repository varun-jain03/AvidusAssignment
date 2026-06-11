// Dependencies
const express = require("express");

// file import 
const { AllActivities } = require("./activity.controller.js");
const authMiddleware = require("../../middleware/auth.middleware.js");
const adminMiddleware = require("../../middleware/admin.middleware.js");

const activityRouter = express.Router();


activityRouter.get(
  "/",
  authMiddleware,
  adminMiddleware,
  AllActivities
);

module.exports = activityRouter;