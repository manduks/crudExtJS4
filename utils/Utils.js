Ext.define('Utils.Utils',{
	singleton:true,

	url: 'http://api-codetlan.herokuapp.com/api/',

	log: function (arg) {
		if(console){
			console.log(arg);
		}
		else{
			alert(arg);
		}
	}
});

log = Utils.Utils.log;