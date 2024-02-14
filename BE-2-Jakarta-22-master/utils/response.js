// utils/response.js
module.exports = {
    success: (res, data = null, message = 'Request succeeded') => {
      res.status(200).json({
        success: true,
        data,
        message,
      });
    },
    error: (res, message = 'Internal Server Error', statusCode = 500) => {
      res.status(statusCode).json({
        success: false,
        message,
      });
    },
  };
  