var fs=require('fs');

fs.mkdir('write1',function(){
    fs.readFile('read.txt','utf8',function(err , data){
        fs.writeFile('./write1/write.txt',data)
    });
});