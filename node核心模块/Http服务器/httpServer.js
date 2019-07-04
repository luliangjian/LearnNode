var http=require("http");

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':"text/html"})
    res.write('<h1>Node.js</h1>');
    res.end("<p>Hello World</p>")
}).listen(3000);
//服务器返回类型Content-Type
console.log("HTTP server is listening at port 3000.");
