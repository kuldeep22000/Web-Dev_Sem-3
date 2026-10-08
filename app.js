

const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Starting the app...");

const numbers = [4, 7, 10, 15];

numbers.forEach((n) => {
  if (isEven(n)) {
    log(`${n} is even`);
  } else {
    log(`${n} is odd`);
  }
});

log("App finished.");
