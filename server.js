var http = require('http'),
server = http.createServer(function(req, res){
    res.end('Hello WORLD !!!');
});

server.listen(8000);

console.log('It is a live!');