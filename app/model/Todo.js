Ext.define('PV.model.Todo',{
	extend:'Ext.data.Model',

	fields:[
		{
			name:'description',
			type:'string',
			mapping:'description'
		},{
			name:'done',
			type:'boolean'			
		},{
			name:'deadline',
			type:'date'
		}
	],

	proxy:{
		type:'jsonp',

		url:Utils.Utils.url + 'api/list_todos.json',

		reader:{
			type:'json',
			root:'todos'
		}
	}
});