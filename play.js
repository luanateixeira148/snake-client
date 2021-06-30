const { connect } = require("./client.js");

console.log("Connecting ...");

connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  
  const handleUserInput = function() {
    // \u0003 maps to ctrl+c input
    if ('\u0003') {
      process.exit();
    }
  }

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();