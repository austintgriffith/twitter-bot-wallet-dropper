/** Third Party **/
const express = require('express');

/** Setup */
const server = express();

/** Config **/
const { serverConfig } = require('./config');

/** Handlers **/
function serverStartHandler() {
  console.log(`Wallet Dropper Web Service Listening on ${serverConfig.port}`);
}

function uncaughtExceptionHandler(err) {
  console.error('-------------------------------');
  console.error('-----EXCEPTION ENCOUNTERED-----');
  console.error(err);
  console.error('-------------------------------');
}

server.listen(serverConfig.port, serverStartHandler);

server.get('*', function(req, res){
  res.send({ status: 404, message: 'Not Found'}, 404);
});

process.on('uncaughtException', uncaughtExceptionHandler);
