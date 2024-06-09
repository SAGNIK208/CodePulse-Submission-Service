const winston = require("winston");
const { LOG_DB_URL } = require("./serverConfig");
require("winston-mongodb");

const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      // Second argument to the combine method, which defines what is exactly going to be printed in log
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "submission_service_logs",
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: `logs/app.log`,
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
