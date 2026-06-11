// File Imports
const ApiError = require("../../utils/ApiError.js");
const { createTask, getTaskById, getTasksByUserId, getAllTasks, updateTask, deleteTask } = require("./task.repository.js");

// Create a New Task
const createNewTask = async (taskData, userId) => {
  return await createTask({ ...taskData, createdBy: userId });
};

// Get All TAsks Created By User
const getMyTasks = async (userId) => {
  return await getTasksByUserId(userId);
};

// Get All The Task created By everyone ( ADMIN only )
const getAllTask = async () => {
  return await getAllTasks();
};

// Updating The Task Details
const updateTasks = async (taskId, updatedData, user) => {
  const task = await getTaskById(taskId);
  if (!task) {
    throw new ApiError(404, "Task Not Found...");
  };

  if (task.createdBy.toString() !== user.userId && user.role !== "Admin") {
    throw new ApiError(403, "Access Denied...");
  };
  return await updateTask(taskId, updatedData);
};

// Deleting The Task
const deleteTasks = async (taskId, user) => {
  const task = await getTaskById(taskId);
  if (!task) {
    throw new ApiError(404, "Task not found...");
  };

  if (task.createdBy.toString() !== user.userId && user.role !== "Admin") {
    throw new ApiError(403, "Access denied...");
  }

  await deleteTask(taskId);
};

module.exports = { createNewTask, getMyTasks, getAllTask, updateTasks, deleteTasks };