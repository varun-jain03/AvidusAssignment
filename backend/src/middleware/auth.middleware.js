// Dependencies 
const jwt = require("jsonwebtoken");

// file Imports
const ApiError = require("../utils/ApiError.js");

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      new ApiError(401, "Unauthorized request...")
    );
  };

  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(
      token, 
      process.env.JWT_SECRET
    );

    req.user = decodedToken;
    next();
  } catch (error) {
    next(new ApiError(401, "Invalid OR Expired Token..."));
  }


};


module.exports = authMiddleware;