Ext.define('PV.view.users.WindowUsers',{
	extend:'Ext.Window',

	width:300,
	height:300,

	title:'Usuario',

	modal:true,

	tpl:[
		'<div>',
			'<img src="{image}" width="64px" height="64px"/>',
			'<div>{name}</div>',
			'<div>{role}</div>',
		'</div>'
	].join(''),

	data:{
		name:'Juan Perez',
		role:'Admin',
		image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLHVwXgAbnHLr4Pny6seApSWGbuynvMrtkWyhjd5B25e2F3xGx'
	}
});