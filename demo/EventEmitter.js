console.log('Hello, this is EventEmitter demo.');

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function(){
	console.log('some_event trigger');
});

setTimeout(function(){
	console.log('ready to trigger event');
	event.emit('some_event');
	console.log('have triggered event');
}, 1000);


var listener = function listener(){
	console.log('server connected');
}

event.addListener('connect', listener);

event.emit('connect');

var eventListeners = require('events').EventEmitter.listenerCount(event,'connect');
console.log(eventListeners+' listeners exist.');
console.log('Programme ends');

