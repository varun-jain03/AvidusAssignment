// File Imports
const asyncHandler = require("../../utils/asyncHandler.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const { createNewTask, getMyTasks, getAllTask, updateTasks, deleteTasks } = require("./task.service.js");

// Create A New TAsk
const create = asyncHandler( async (req, res) => {
  const task = await createNewTask(req.body, req.user.userId);
  res.status(201).json(new ApiResponse(201, task, "Task Created Successfully..."));
});

// Getting all My Tasks
const getMy = asyncHandler( async (req, res) => {
  const tasks = await getMyTasks(req.user.userId);
  res.status(200).json(new ApiResponse(200, tasks, "Task Fetched Successfuly..."));
});

// Getting All Task Including Others (Admin only)
const getAll = asyncHandler( async (req, res) => {
  const tasks = await getAllTask();
  res.status(200).json(new ApiResponse(200, tasks, "All Tasks Fetched Successfuli..."));
});

// Updating The Task Details
const update = asyncHandler( async (req, res) => {
  const updatedData = req.body;
  const updatedTask = await updateTasks(req.params.id, updatedData, req.user);
  res.status(200).json(new ApiResponse(200, updatedTask, "Task Updated Successfully..."));
});


// Deleteing the Task
const deleting = asyncHandler( async (req, res) => { 
  await deleteTasks(req.params.id, req.user);
  res.status(200).json(new ApiResponse(200, null, "Task deleted successfully..." ));
  }
);



module.exports = { create, getMy, getAll, update, deleting };