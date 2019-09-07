var express=require('express');
var ejs=require('ejs');

var app=express();
app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.sendFile(__dirname+'/index.html');     // always give absolute form
    res.render('index');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:name',function(req,res){
    interests={studies:'Developent',sports:'Badminton',hobbies:['reading books','playing with kids'],}
    res.render('profile',{name:req.params.name,interests:interests});
});

app.listen(8000);