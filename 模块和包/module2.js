function Hello(){
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
}
module.exports=Hello;
/*注意，模块接口的唯一变化是使用  module.exports = Hello 代替了  exports.Hello=
Hello 。在外部引用该模块时，其接口对象就是要输出的  Hello 对象本身，而不是原先的
exports 。*/

/*事实上， exports  本身仅仅是一个普通的空对象，即 {} ，它专门用来声明接口，本
质上是通过它为模块闭包
① 的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，
所以可以用其他东西来代替，譬如我们上面例子中的 Hello  对象。*/