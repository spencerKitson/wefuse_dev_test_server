var {infoLogger, errorLogger} = require("./startLoggin");


var log = [];

log.info = function(message){
  infoLogger.log({
    level: 'info',
    message: message
  });
}

log.error = function(message){
  errorLogger.log({
    level: 'error',
    message: message
  });
}

module.exports = log;
