fs=require('fs');

//synchronous reading and writing

var x=fs.readFileSync('read.txt','utf8');
console.log(x);
fs.writeFileSync('write.txt',x);

//asynchronous reading and writing

fs.readFile('read.txt','utf8',function(err,data){
    console.log(data);
});
console.log("Hi");

//the difference is that asynchronous is non-blocking means while it is reading the file it can execute next block of code