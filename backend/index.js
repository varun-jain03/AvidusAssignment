// Dependencies
require('dotenv').config();
const express = require("express");
const cors = require("cors");

// File Import
const connectDB = require("./src/config/db.js");
const errorMiddleware = require("./src/middleware/error.middleware.js");

// Routes Import
const healthRouter = require("./src/routes/health.route.js");
const userRouter = require("./src/modules/users/user.routes.js");
const authRouter = require("./src/modules/auth/auth.routes.js");
const taskRouter = require("./src/modules/tasks/task.routes.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tasks", taskRouter);

//Global Error Middleware
app.use(errorMiddleware);

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