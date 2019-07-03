var fs=require("fs");
//异步读取文件
fs.readFile("testIO.txt","utf-8",function (err,data) {
    if(err){
        console.log(err);
    }else{
        //再输出这个，说明读取文件是异步的方式
        console.log(data);
    }
});
//先输出这个,这个可能有点违反直觉
console.log("end1.");


