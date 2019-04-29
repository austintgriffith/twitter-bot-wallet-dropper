/** Third Party **/
const express = require('express');

/** Setup */
const server = express();

/** Constants */
const DEFAULT_PORT = 3000;

/** Handlers **/
function serverStartHandler() {
    console.log(`Wallet Dropper Web Service Listening on ${DEFAULT_PORT}`);
}

function uncaughtExceptionHandler(err) {
  console.error('-------------------------------');
  console.error('-----EXCEPTION ENCOUNTERED-----');
  console.error(err);
  console.error('-------------------------------');
}

server.listen(DEFAULT_PORT, serverStartHandler);

server.get('*', function(req, res){
  res.send({ status: 404, message: 'Not Found'}, 404);
});

process.on('uncaughtException', uncaughtExceptionHandler);
