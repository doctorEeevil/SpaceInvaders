var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
    });
app.get('/game.js', function(req, res){
	res.sendFile(__dirname + '/game.js');
    });
app.get('/shoot.wav', function(req, res){
	res.sendFile(__dirname + '/shoot.wav');
    });
io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	    });
    });

http.listen(3000, function(){
	console.log('listening on *:3000');
    });
