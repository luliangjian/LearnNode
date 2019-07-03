var http=require("http");
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':"text/html"})
    res.write('<h1>Node.js</h1>');
    res.end("<p>Hello World</p>")
}).listen(3000);
console.log("HTTP server is listening at port 3000.");

/*node建一个简单的服务器*/
//1.执行脚本  node app.js
//2.访问 http://127.0.0.1:3000/


//node app.js
//实时监听修改 suervisor app.js