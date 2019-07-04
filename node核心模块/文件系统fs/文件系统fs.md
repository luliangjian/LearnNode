var fs=require("fs");
fs.readFile("content.txt",function (err,data) {//默认不设置编码则以二进制的形式读取
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

fs.readFile("content.txt",'utf-8',function (err,data) {//默认不设置编码则以二进制的形式读取
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

/*Node.js 的异步编程接口习惯是以函数的最后一个参数为回调函数，通
常一个函数只有一个回调函数。回调函数是实际参数中第一个是 err，其
余的参数是其他返回的内容。如果没有发生错误，err 的值会是 null 或
undefined。如果有错误发生，err 通常是 Error 对象的实例。*/
//node readFile.js
