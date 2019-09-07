var express=require('express');

app=express();

app.get('/',function(req,res){
    res.send('Hey There');
});

app.get('/:id',function(req,res){
    res.send('Hey there you are at page'+req.params.id);
})

app.listen(8000);