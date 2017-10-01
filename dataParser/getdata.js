
//workbcjobs.api.gov.bc.ca/v1

//var PythonShell = require('python-shell');

//
// var options = {
//   args: ['--field 0 --education 0']
// };
//
// PythonShell.run('parsedata.py', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });


http = require('http');
fs = require('fs');
server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="te,t" name="name" /><input type="submit" value="Submit" /></form></body>';
        //var html = fs.readFileSync('index.html');
        res.writeHead(200, "Access-Control-Allow-Origin: *");
        res.end("thanks");
        //console.log(res.end("thanks"));
    }

});

port = 3000;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);

// var http = require('http');
// var fs = require('fs');
// var connect = require('connect');
// var express = require('express');
//
// var app = express();
// app.get('/', function(req, res  ) {
//     res.json('Hello World');
// });
//
//
// var server = app.listen(8888, function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("Example app listening at http://%s:%s", host, port);
// });



