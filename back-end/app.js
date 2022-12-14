const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
    http = require('http');

    app.set("view engine", "ejs");

    let indexRoute = require("./routes/index");
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "public"));

app.use("/", indexRoute);


const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

const server = http.createServer(app);

app.use(function(req, res, next){
	next();
});

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return false;
  }
  

  // Server status responds

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  }
  


  