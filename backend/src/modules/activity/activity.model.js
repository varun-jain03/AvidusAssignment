// Dependencies
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true
    },
    action: {
      type: String,
      required: true
    },
    details: {
      type: String
    }
  },{ timestamps: true }
);

const ActivityModel = mongoose.model("Activitys", activitySchema);

module.exports = ActivityModel;