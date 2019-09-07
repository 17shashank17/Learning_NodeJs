var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    
    if (req.url==="/" || req.url==="/index"){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream("index.html").pipe(res);
    }
    else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Page Not Found!");
    }
});

server.listen(8000,'localhost');