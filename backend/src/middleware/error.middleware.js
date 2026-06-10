const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.massage = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.massage,
    errors: err.errors || []
  });
};

module.exports = errorMiddleware;