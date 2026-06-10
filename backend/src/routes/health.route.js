// Dependencies
const express = require("express");

const healthRouter = express.Router();

healthRouter.get("/", (req, res) => {
  res.status(200).json({success: true, message: "server is running"});
});

module.exports = healthRouter;