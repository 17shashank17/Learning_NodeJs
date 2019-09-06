var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log("Server Created");
    res.writeHead(200,{'Content-Type':'text/html'})
    var read=fs.createReadStream('index.html','utf8');
    read.pipe(res);
});




server.listen(8000,'127.0.0.1')