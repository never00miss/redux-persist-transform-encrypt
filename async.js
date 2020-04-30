if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer

global.process.version = "12.10.0"

module.exports = require('./lib/async');
