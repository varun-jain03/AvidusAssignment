// File Import
const UserModel = require("./user.model.js");

// Create A New User
const createUser = async (userData) => {
  return await UserModel.create(userData);
};

// Finding User By Email ID
const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

// Finding User By UserId
const findUserById = async (id) => {
  return await UserModel.findById(id)
};

// Get All The Users 
const getAllUsers = async () => {
  return await UserModel.find().select("-password");
};

// Delete User By USerID
const deleteUserById = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};

// Update USer Status ACtive Or Inactive
const updateUserStatus = async (id, status) => {
  return await UserModel.findByIdAndUpdate(
    id, 
    { status },
    { new: true }
  ).select("-password");
};

module.exports = { createUser, findUserByEmail, findUserById, getAllUsers, deleteUserById, updateUserStatus };