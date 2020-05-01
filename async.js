if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer

if(!("version" in global.process)) {
    global.process.version = "12.10.0"
}

module.exports = require('./src/async');
