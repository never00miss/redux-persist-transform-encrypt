if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer

if(global && "process" in global && !("version" in global.process)) {
    global.process.version = "12.10.0"
}

module.exports = require('./src/async');
