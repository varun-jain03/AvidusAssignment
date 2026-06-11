//file import
const asyncHandler = require("../../utils/asyncHandler.js");
const ApiResponse = require("../../utils/ApiResponse.js");
const { getAnalytics } = require("./analytics.service.js");

const getAnalytic = asyncHandler( async (req, res) => {
    const analytics = await getAnalytics();
    return res.status(200).json(new ApiResponse(200, analytics, "Analytics fetched successfully..." ));
  }
);

module.exports = { getAnalytic };