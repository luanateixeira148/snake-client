const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', function(data) {
    console.log('Server says: ', data);
  });

  conn.on('connect', function(){
    console.log("Successfully connected to game server");
    conn.write('Name: LuT');
  });

  // conn.on('connect', function(){
  //   setTimeout(function() {
  //     conn.write('Move: up');
  //   }, 100);

  //   setTimeout(function() {
  //     conn.write('Move: right');
  //   }, 400);

  // });

  return conn;
};

module.exports = {
  connect
};