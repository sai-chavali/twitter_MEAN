var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('HELLO SAI');
});
app.listen(8000);