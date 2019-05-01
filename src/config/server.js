/* Constants */
const DEFAULT_PORT = 3000;

const PROCESS_ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase();
const ENVIRONMENT = PROCESS_ENV || 'development';

/** Roles **/
const serverConfig = {
  env: ENVIRONMENT,
  port: process.env.SERVER_PORT || DEFAULT_PORT,
};

module.exports = serverConfig;
