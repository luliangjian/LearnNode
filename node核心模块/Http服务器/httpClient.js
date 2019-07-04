var http=require("http");
var queryString=require("querystring");

var contents=queryString.stringify({
    /*name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: 'Zijing 2#, Tsinghua University',*/
    systemType:"base"
})

var options={
    host: 'localhost',  /*这里是域名或者ip*/
    port:3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length' : contents.length
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});
req.write(contents);
req.end();

//node httpClient.js
