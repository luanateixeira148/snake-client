const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
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

  return conn;
};

module.exports = {
  connect
};