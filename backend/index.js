// Dependencies
require('dotenv').config();
const express = require("express");
const cors = require("cors");

// File Import
const connectDB = require("./src/config/db.js");

// Routes Import
const healthRouter = require("./src/routes/health.route.js");


const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/health", healthRouter);

// DB Connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Database connection failed:", err);
  });