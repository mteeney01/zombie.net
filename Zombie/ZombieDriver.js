"use strict";

const Zombie = require('zombie');
const zombie = new Zombie();

process.on('uncaughtException', e => console.error('Uncaught Exception: ' + e));

//  Entry point for Edge.js
return function(data, callback) {
  callback(null, new Bridge(zombie));
}
