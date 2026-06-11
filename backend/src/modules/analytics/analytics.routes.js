// Dependdencies
const express = require("express");

// file import
const { getAnalytic } = require("./analytics.controller.js");
const authMiddleware = require("../../middleware/auth.middleware.js");
const adminMiddleware = require("../../middleware/admin.middleware.js");

const analyticsRouter = express.Router();


analyticsRouter.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAnalytic
);

module.exports = analyticsRouter;