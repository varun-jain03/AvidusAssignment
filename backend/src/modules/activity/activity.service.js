// file imports
const { createActivity, getAllActivities } = require("./activity.repository.js");

// create activity
const logActivity = async (userId, action, details) => {
  return await createActivity({ user: userId, action, details });
}

// getting all activities
const getAllActivitys = async () => {
  return await getAllActivities();
};

module.exports = { logActivity, getAllActivitys };