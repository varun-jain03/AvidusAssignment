// File Impory 
const ApiError = require("../utils/ApiError.js");

// ADmin Middlewate
const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return next(
      new ApiError(403, "Access Denied. Admin Only...")
    );
  }
  next();
};

module.exports = adminMiddleware;