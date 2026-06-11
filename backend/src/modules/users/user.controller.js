// File Import
const asyncHandler = require("../../utils/asyncHandler.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const { getAllTheUsers, deleteUser, updateUsersStatus } = require("./user.service.js");

//Getting All The USers
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await getAllTheUsers();

  console.log(req.user);
  return res.status(200).json(
    new ApiResponse(200, users, "Users Fetched SuccessFully...")
  );
});

// delete user
const deleting = asyncHandler(async (req, res) => {
  await deleteUser(req.params.id);
  return res.status(200).json(new ApiResponse(200, null, "User deleted successfully..."));
}
);

// update user  status
const update = asyncHandler(async (req, res) => {
  const user = await updateUsersStatus(req.params.id, req.body.status);
  return res.status(200).json(new ApiResponse(200, user, "Status updated successfully..."));
}
);

module.exports = { getAllUsers, deleting, update };