//默认全局对象是global,在global里定义属性就是全局属性，尽量不要使用全局属性，否则会污染其他变量
global.mymessage={"Hello":"World"};

console.log(mymessage);