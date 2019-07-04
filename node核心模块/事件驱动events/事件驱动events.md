##事件发射器
 EventEmitter.on(event, listener) 为指定事件注册一个监听器，接受一个字
符串 event 和一个回调函数 listener。
 EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传
递若干可选参数到事件监听器的参数表。
 EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即
监听器最多只会触发一次，触发后立刻解除该监听器。
 EventEmitter.removeListener(event, listener) 移除指定事件的某个监听
器，listener 必须是该事件已经注册过的监听器。
 EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器，
如果指定 event，则移除指定事件的所有监听器。

##error 事件
EventEmitter 定义了一个特殊的事件 error，它包含了“错误”的语义，我们在遇到
异常的时候通常会发射 error 事件。当 error 被发射时，EventEmitter 规定如果没有响
应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。我们一般要为会发射 error
事件的对象设置监听器，避免遇到错误后整个程序崩溃

##继承 EventEmitter
大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、
http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
