var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var dbhost = 'mongodb://localhost/VM7000';
mongoose.connect(dbhost);

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){


var VM7006 = mongoose.Schema({
	name:String,
	pv:[]
});

var vm = mongoose.model('vm',VM7006);

var vm1 = new vm({
	name:'記錄1',
	pv:[-100.03,100.54,-43.48,0.34,50.3]
});

vm1.save(function(err){
	if (err) throw err;
	console.log("saved ");
});
});

//app.use(express.static(__dirname));

app.get('/',function(req,res,next){
	res.sendFile('/home/linaro/test/index.htm');
});

app.listen(8888);

