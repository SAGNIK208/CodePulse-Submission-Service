const dotenv = require("dotenv");
const { DB_NAME, LOG_DB_NAME } = require("../constants");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3002,
  ATLAS_DB_URL: process.env.ATLAS_DB_URL + DB_NAME,
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  REDIS_PORT: process.env.REDIS_PORT || "6379",
  LOG_DB_URL: process.env.LOG_DB_URL + LOG_DB_NAME,
  NODE_ENV: process.env.NODE_ENV || "dev",
  PROBLEM_ADMIN_SERVICE_URL: process.env.PROBLEM_ADMIN_SERVICE_URL,
  SOCKET_SERVICE_URL: process.env.SOCKET_SERVICE_URL,
};
