// file imports
const { getAllActivitys } = require("./activity.service.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const asyncHandler = require("../../utils/asyncHandler.js");


const AllActivities = asyncHandler ( async (req, res) => {
  const activities = await getAllActivitys();
  res.status(200).json(new ApiResponse(200, activities, "Activities Fetched Succesfully..."));
});

module.exports = { AllActivities };