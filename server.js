var http=require('http');

var server=http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Its working');
});

server.listen(8000,'127.0.0.1');