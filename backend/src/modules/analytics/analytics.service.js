// file import
const UserModel = require("../users/user.model.js");
const TaskModel = require("../tasks/task.model.js");

const getAnalytics = async () => {
  const totalUsers = await UserModel.countDocuments();
  const totalTasks = await TaskModel.countDocuments();
  const completedTasks = await TaskModel.countDocuments({ status: "Completed" });
  const pendingTasks = await TaskModel.countDocuments({ status: "Pending" });

  return {
    totalUsers,
    totalTasks,
    completedTasks,
    pendingTasks
  };
};

module.exports = { getAnalytics };