var mongodb = require('mongodb');
var server = new mongodb.Server('localhost',27017,{auto_reconnection:true});
var db = new mongodb.Db('VM7000',server,{safe:true});

var tmp1={'date':Date.now()};

db.open(function(err,db){
	if(!err){
		db.collection('vms',{safe:true},function(err,collection){
			collection.insert(tmp1,{safe:true},function(err,result){
				console.log(result);
			});
		});
	}});
