var fs=require("fs");
//异步读取文件
var data=fs.readFileSync("testIO.txt","utf-8");
//阻塞等待读取完成后，将文件的内容作为函数的返回值赋给 data 变量
console.log(data);

console.log("end1.");


