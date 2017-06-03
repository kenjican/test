var db = require('mongoskin').db('localhost:27017/VM7000');

var ins = db.collection('vms').insert({'date':Date.now()});

setIntetval(ins,5000);


