
Ext.define('PV.view.todos.TodosForm',{
	extend: 'Ext.form.Panel',

	requires:['Ext.form.field.Date','Ext.form.field.Hidden'],

	title:'Todos Form',
	xtype:'todosform',

	layout: 'anchor',
	bodyPadding: 5,
    
    defaults: {
        anchor: '90%',
        xtype:'textfield',
        allowBlank:false,
        msgTarget:'side',
        labelAlign:'top'
    },

    width:300,

	items:[{
		xtype:'hiddenfield',
		name:'id'
	},{
		xtype:'textarea',
		name:'description',
		fieldLabel:'Descripción'
	},{
		xtype:'datefield',
		name:'deadline',
		format:'d-m-Y',
		fieldLabel:'Fecha de termino'
	}],

	buttons:[{
		text:'Limpiar',
		handler:function (btn) {
			btn.up('form').getForm().reset();
			btn.up('form').down('#addOrUpdate').setText('Agregar');
		}
	},{
		text:'Agregar',
		itemId:'addOrUpdate',
		disabled:true,
		formBind:true
	}]
});