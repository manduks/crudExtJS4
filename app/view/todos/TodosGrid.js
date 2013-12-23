Ext.define('PV.view.todos.TodosGrid',{
	extend:'Ext.grid.Panel',

	requires	:['Ext.grid.column.Date'],

	xtype:'todosgrid',
	// alias:'widget.todosgrid',

	columns:[{
		text:'Descripcion',
		dataIndex:'description',
		flex:1	
	},{
		text:'Terminado?',
		dataIndex:'done',
		width:150,
		renderer:function (value) {
			return (value === true) ? '<p style="color:green">hecho</p>':'<p style="color:red">pendiente</p>';
		}	
	},{
		text:'Terminar antes de ',
		dataIndex:'deadline',
		xtype: 'datecolumn',   
		format:'d-m-Y',
		width:150
	}],

	store:'Todos',

	tbar:['->',{
		text:'Agregar',
		accion:'add'
	},{
		text:'Editar',
		accion:'edit'
	},'-',{
		text:'Eliminar',
		accion:'delete'
	}]
});