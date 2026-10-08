// logger.js - a simple custom module
// This function prints a message with the current time

function log(message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}

module.exports = log;
