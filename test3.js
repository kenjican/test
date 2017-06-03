var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var db = mongoose.createConnection('localhost','VM7000');

//db.once('open',function(){});

var vmschema = new mongoose.Schema({
	model:String,
	pv:[]
});

var vms = db.model('vms',vmschema);

var vm1 = new vms({model:'VM7006'});

var vmr = function(a){
	vm1.pv=a;
	vm1.save();
};

setInterval(function(){vmr([99,-5.40])},5000);

//vmr([0.54,-90]);
