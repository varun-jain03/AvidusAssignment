// file imports
const ActivityModel = require("./activity.model");

const createActivity = async (activityData) => {
  return await ActivityModel.create(activityData);
};

const getAllActivities = async () => {
  return await ActivityModel.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });
};

module.exports = { createActivity, getAllActivities };