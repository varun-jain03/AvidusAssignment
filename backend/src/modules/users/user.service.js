// File Import
const { createUser, findUserByEmail, findUserById, getAllUsers, deleteUserById, updateUserStatus } = require("./user.repository.js");
const ApiError = require("../../utils/ApiError.js");



// Get All The Users 
const getAllTheUsers = async () => {
  return await getAllUsers();
};

// Delete user
const deleteUser = async (userId) => {
  const user = await findUserById(userId);
  if (!user) {
    throw new ApiError(404, "User not found...");
  };
  await deleteUserById(userId);
};

// Update User Status
const updateUsersStatus = async (userId, status) => {
  const user = await findUserById(userId);
  if (!user) {
    throw new ApiError(404, "User not found...");
  };

  return await updateUserStatus(userId, status);
};


module.exports = { getAllTheUsers, deleteUser, updateUsersStatus };