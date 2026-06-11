// File Imports
const { registerUser, loginUser } = require("./auth.service.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const asynHandler = require("../../utils/asyncHandler.js");
const asyncHandler = require("../../utils/asyncHandler.js");

// Registering a New User
const register = asyncHandler(async (req, res) => {
  const user = await registerUser(req.body);
  return res.status(201).json(
    new ApiResponse(201, user, "User Registered Successfully...")
  );
});

// Logging in Existing USer
const login = asyncHandler(async (req, res) => {
  const data = await loginUser(
    req.body.email,
    req.body.password
  );

  return res.status(200).json(
    new ApiResponse(200, data, "Login Successfull...")
  );
});



module.exports = { register, login };