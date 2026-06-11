class ApiError extends Error {
  constructor(statusCode, massage = "Something Went Wrong") {
    super(massage);

    this.statusCode = statusCode;
    this.massage = massage;

    Error.captureStackTrace(this, this.constructor);
  }
};

module.exports = ApiError;