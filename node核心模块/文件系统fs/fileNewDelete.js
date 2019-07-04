var fs=require("fs");

//创建目录  fs.mkdir(path[, options], callback)
fs.mkdir("tmp/",function (err) {//   /tmp/和tmp/有区别 前者是绝对路径  后者是相对路径
    if(err){
        console.log(err)
    }
    console.log("目录创建成功。");
})
//不能既创建文件夹又同时创建文件 要么创建多个深层目录的文件夹要么创建单个文件
/*fs.mkdir("tmp/tmp.txt",function (err) {//   /tmp/和tmp/有区别 前者是绝对路径  后者是相对路径
    if(err){
        console.log(err)
    }
    console.log("文件创建成功。");
})*/

//删除目录
fs.rmdir("tmp/",function (err) {
    if(err){
        console.log(err)
    }
    console.log("删除文件夹成功。");
})

//读取目录
fs.readdir("../../node核心模块",function (err,files) {
    if(err){
        return console.error(err)
    }
    files.forEach(function (file) {
        console.log(file);
    })
})


fs.copyFile("copyFile.txt","content.txt",function (err) {
    if(err) throw err;
    console.log("文件成功拷贝过去");
})
