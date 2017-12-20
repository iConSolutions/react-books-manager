

const ErrorHandler = (err, req, res, next) => {
  console.log(next);
  res.status(err.status || 500);
  return res.json({
    type: err.type || 'InternalServerError',
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
};

module.exports = ErrorHandler;
