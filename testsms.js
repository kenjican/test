var App = require('alidayu-node');
var app = new App('23442811','1a4f18df44d1a2eec3104df1a85a6261');

app.smsSend({
	sms_type:'normal',
	sms_free_sign_name:'注册眼症',
	sms_param:{'subject':'简体繁體','courier':'顺丰','awb':'23433232'},
	rec_num:'13013786354',
	sms_template_code:'SMS_34660260'
});
