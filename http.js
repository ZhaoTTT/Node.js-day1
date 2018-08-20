//use nodejs buildin lib
//import to include http module
var http =require('http');

//create a webserver
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello World~~~\n');
}).listen(1337, '127.0.0.1');
//calls js inner function: createServer
//chrome is client, myself is server.
//I have to pass some parameters in

//
console.log('server is running on 127.0.0.1:1337');