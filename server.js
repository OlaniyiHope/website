const express = require('express');
const { createServer } =  require("http://localhost:5000/blogs");
const path = require('path');
const { log, error } = require('console');

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
const port = normalizePort(process.env.PORT || '5000');

const app = express();
app.set('port', port);

// app.use(express.static(__dirname));
// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname, './build/index.html'));
// });
let root = path.join(__dirname, '.', 'build/')
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  log(`Listening on ${bind}`);
}

function onError(e) {
  if (e.syscall !== 'listen') {
    throw e;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (e.code) {
    case 'EACCES':
      error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw e;
  }
}
const server = createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
