var log = require('../util/logger');

function errorHandler(error, request, response, next){
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Invalid Request"
    }
  })
  log.error(error.status, error.message || "Invalid Request");
}

module.exports = errorHandler;
