console.log("Hello, this is a event loop demo");

var events = require('events');
var eventEmitter = new events.EventEmitter();

var handle = function connected(){
	console.log("Connect successfully");

	eventEmitter.emit('data_received');
}

eventEmitter.on('connect', handle);
eventEmitter.on('data_received',function(){
	console.log('data received successfully.');
});

eventEmitter.emit('connect');

console.log("Programme ends.");
