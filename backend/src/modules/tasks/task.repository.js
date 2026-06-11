// File Import 
const TaskModel = require("./task.model.js");


// Creating a New Task
const createTask = async (taskData) => {
  return await TaskModel.create(taskData);
};

// Getting Task By Id
const getTaskById = async (id) => {
  return await TaskModel.findById(id);
};

// Getting Tasks By USERID
const getTasksByUserId = async (userId) => {
  return await TaskModel.find({ createdBy: userId });
};

// Get All The Task
const getAllTasks = async () => {
  return await TaskModel.find().populate("createdBy", "name emmail");
};

// Updating The Task
const updateTask = async (taskId, updatedData) => {
  return await TaskModel.findByIdAndUpdate(taskId, updatedData, { new: true });
};

// Deleting The Task
const deleteTask = async (taskId) => {
  return await TaskModel.findByIdAndDelete(taskId);
};

module.exports = { createTask, getTaskById, getTasksByUserId, getAllTasks, updateTask, deleteTask };