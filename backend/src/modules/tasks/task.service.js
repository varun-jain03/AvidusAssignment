// File Imports
const ApiError = require("../../utils/ApiError.js");
const { createTask, getTaskById, getTasksByUserId, getAllTasks, updateTask, deleteTask } = require("./task.repository.js");
const { logActivity } = require("../activity/activity.service.js");

// Create a New Task
const createNewTask = async (taskData, userId) => {
  const task = await createTask({ ...taskData, createdBy: userId });
  await logActivity(
    userId,
    "TASK_CREATED",
    `Created task ${task.title}`
  );
  return task;
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
  const updatedTask = await updateTask(taskId, updatedData);
  await logActivity(
    user.userId,
    "TASK_UPDATED",
    `Updated task ${updatedTask.title}`
  );
  return updatedTask;
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
  
  await logActivity(
    user.userId,
    "TASK_DELETED",
    `Deleted task ${task.title}`
  );
  await deleteTask(taskId);
};

module.exports = { createNewTask, getMyTasks, getAllTask, updateTasks, deleteTasks };