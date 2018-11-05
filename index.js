/**
 * index.js
 */

const noble = require('noble');

console.log('NOBLE!');

noble.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);

  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
    process.exit(1);
  }
}).on('scanStart', function() {
  console.log('on -> scanStart');
}).on('scanStop', function() {
  console.log('on -> scanStop');
}).on('discover', function(peripheral) {
  console.log('on -> discover: ' + peripheral);
  noble.stopScanning();
});
