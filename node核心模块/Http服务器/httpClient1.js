var http=require("http");
var queryString=require("querystring");

var contents=queryString.stringify({
    systemType:"base"
})

var options={
    host: '100.100.233.100',  /*这里是域名或者ip*/
    port:8082,
    path: '/cmopreward/v1/Common/qryMenuTree',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length' : contents.length
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        console.log(data);
    });
});
req.write(contents);
req.end();

//node httpClient.js
