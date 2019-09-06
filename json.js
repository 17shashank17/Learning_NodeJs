var http=require('http');

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    myjson={
        'name':'Shashank',
        'Department':'IT',
        'Semester': 'V', 
        'Age': 21,
    }
    res.end(JSON.stringify(myjson));
});

server.listen(8000,'localhost');