var http=require('http');
var fs=require('fs')

var stream=fs.createReadStream('./read.txt','utf8');
stream.on('data',function(chunk){
    console.log('New data recieved');
    console.log(chunk);
})