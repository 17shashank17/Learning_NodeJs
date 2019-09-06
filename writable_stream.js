var http=require('http');
var fs=require('fs');

var read=fs.createReadStream('./read.txt','utf8');

var write=fs.createWriteStream('./first/write.txt');

read.on('data',function(chunk){
    console.log("data recieved");
    write.write(chunk);
});