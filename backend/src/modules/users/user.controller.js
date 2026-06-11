// File Import
const asyncHandler = require("../../utils/asyncHandler.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const { getAllTheUsers } = require("./user.service.js");

//Getting All The USers
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await getAllTheUsers();

  console.log(req.user);
  return res.status(200).json(
    new ApiResponse(200, users, "Users Fetched SuccessFully...")
  );
});

module.exports = { getAllUsers };