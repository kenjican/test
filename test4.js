var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//var db = mongoose.createConnection('localhost','VM7000');

app.use(express.static(__dirname));

app.get('/',function(req,res){
	res.sendFile('/home/linaro/test/test4.htm');
});


app.listen(8080);
