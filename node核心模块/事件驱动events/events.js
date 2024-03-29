/*events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就
是事件发射与事件监听器功能的封装。EventEmitter 的每个事件由一个事件名和若干个参
数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持
若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作
为回调函数参数传递。*/
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'byvoid', 1991);

//node events.js
