// var express = require('express');
// var app = express();
// var socket = require('socket.io');
//
// var server = app.listen(8080,function(req,res){
//
//
//
//
//   console.log("appp is listen on the port 8080");
// })
//
// //use static file
// app.use(express.static('public'));
//
// //socket Setup
// var io = socket(server);
// io.on('connection',function(socket){
//   console.log('made socket connection successfull',socket.id);
//   socket.on('chat',function(data){
//     io.sockets.emit('chat',data);
//   });
// });

var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

});
