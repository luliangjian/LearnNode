var fs=require("fs");

//异步读取
fs.readFile("content.txt",function (err,data) {//默认不设置编码则以二进制的形式读取
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})
//打开文件  fs.open(path, flags[, mode], callback)
fs.open("content.txt","r+",function (err,fd) {
    if(err){
        console.error(err);
    }else{
        console.log("打开文件成功");
        fs.close(fd,function (err) {
            if(err){
                console.log(err);
            }
            console.log("文件关闭成功");
        })
    }
})
//获取文件信息    fs.stat(path, callback)
fs.stat("content.txt",function (err,stats) {
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isBlockDevice());
    //...
})
//写入文件  fs.writeFile(file, data[, options], callback)
fs.writeFile("content.txt","我是通过fs.writeFile写入的内容",function (err) {//会替换之前内容
    if(err){
        return console.error(err);
    }
})


//node fileReadWrite.js
