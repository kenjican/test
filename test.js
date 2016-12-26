var mongodb = require('mongodb');
var server = new mongodb.Server('localhost',27017,{auto_reconnection:true});
var db = new mongodb.Db('VM7000',server,{safe:true});

//var tmp1={'date':'2016-12-14'};

db.open(function(err,db){});
<<<<<<< HEAD
/*
	if(!err){
		db.collection('vms',{safe:true},function(err,collection){
			collection.insert(tmp1,{safe:true},function(err,result){
				console.log(result);
			});
		});
	}});
*/

var col = db.collection('vms');
var ins = col.insert({'date':Date.now()});

	setInterval(db.open,5000);
//db.collection('vms',{safe:true},function(){});

var test = function(){
var tmp1 = {'date':Date.now()};
db.collection('vms',{safe:true},function(err,collection){
collection.insert(tmp1,{safe:true},function(err,result){
				console.log(result);
			});
			});}

setInterval(test,1000);
