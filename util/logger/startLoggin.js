const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

exports.infoLogger = createLogger({
    format: combine(
      label({ label: 'Info' }),
      timestamp(),
      myFormat
    ),
    level: "info",
    transports: [
      // new transports.Console(),
      new transports.File({ filename: 'info.log' }),
      new transports.File({ filename: 'combined.log' })
    ]
});

exports.errorLogger = createLogger({
    format: combine(
      label({ label: 'Error' }),
      timestamp(),
      myFormat
    ),
    transports: [
      // new transports.Console(),
      new transports.File({ filename: 'error.log' }),
      new transports.File({ filename: 'combined.log' })
    ]
});
//
// if (process.env.NODE_ENV !== 'production') {
//   infoLogger.add(new transports.Console({
//     format: format.simple()
//   }));
//
//   errorLogger.add(new transports.Console({
//     format: format.simple()
//   }));
// }
