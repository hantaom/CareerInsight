var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

var arr = [];

io.on('connection', function(socket){
    arr.map(function(item){
        socket.emit('arr', item);
    });

    socket.on('message', function(msg){
        arr.push(msg);
        console.log('Received Message: ', msg);
        
        
        io.emit('message', msg);
        
    });
});

server.listen(8080, function(){
    console.log('Chat server running');
});