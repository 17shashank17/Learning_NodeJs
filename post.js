var express=require('express');
var bodyParser=require('body-parser');

var app=express();

var urlencodedParser=bodyParser.urlencoded({ extended : false })

app.set('view engine','ejs');
app.use('/assets',express.static('assets'))

app.get('/contact',function(req,res){
    console.log(req.url);
    res.render('form');
})

app.post('/contact',urlencodedParser, function(req,res){
    data=req.body;
    console.log(data);
    res.render('success',{data:data,});
})

app.listen(8000)