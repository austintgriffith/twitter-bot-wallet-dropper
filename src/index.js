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

server.listen(DEFAULT_PORT, serverStartHandler);

server.get('*', function(req, res){
  res.send({ status: 404, message: 'Not Found'}, 404);
});
