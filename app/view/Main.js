Ext.define('PV.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.layout.container.Card',
        'Ext.layout.container.Border',
        'PV.view.login.Form',
        'PV.view.todos.TodosGrid',
        'PV.view.Menu',
        'PV.view.todos.TodosForm'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'card'
    },

    activeItem:0,

    style:{
        backgroundColor:'#CCC'
    },

    items: [{
        xtype:'container',
        layout:{
            type:'hbox',
            align:'middle',
            pack:'center'
        },
        items:[{
            xtype:'container',
            flex:1
        },{
            xtype:'loginform',
            width:300
        },{
            xtype:'container',
            flex:1
        }]
    },{
        xtype:'container',
        layout: 'border',
        defaults:{
            collapsible:true
        },
        bodyBorder: false,
        items:[{
            xtype:'panel',
            title:'Menu',
            region:'west',

            layout:'fit',
            bodyStyle:{
                backgroundColor:'#666666'
            },
            items:[{
                xtype:'pvmenu'
            }],

            width:200
        },{
            xtype:'todosgrid',
            title:'Pendientes',
            region:'center',
            collapsible:false
        },{
            xtype:'todosform',
            collapsed:true,
            region:'east'
        },{
            xtype:'panel',
            title:'Opciones',
            height:100,
            collapsed:true,
            region:'south'
        }]
    }]
});