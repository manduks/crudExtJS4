Ext.define('PV.controller.Main', {
	extend: 'Ext.app.Controller',

	refs: [{
		ref: 'mainView',
		selector: 'app-main'
	}, {
		ref: 'todosForm',
		selector: 'todosform'
	}],

	init: function() {
		this.control({
			'loginform': {
				dalepermiso: this.onLoginUser
			},
			'todosgrid toolbar button': {
				click: this.onTodosGridBtnClick
			},
			'todosgrid': {
				itemclick: this.onTodosGridItemClick
			},
			'todosform': {
				expand: function(form) {
					form.items.items[0].focus();
				}
			},
			'todosform #addOrUpdate': {
				click: this.addOrUpdateTodo
			},
			'pvmenu':{
				itemclick:this.onMenuItemClick
			}
		});
	},

	onMenuItemClick:function (dataview, record, item, index, e, eOpts) {
		switch(record.get('action')){
			case 'logout': 
				localStorage.removeItem('token');
				localStorage.removeItem('privilegios');
				this.getMainView().layout.setActiveItem(0);
			break;

			default: 
				// alert(record.get('action'));
				var window = Ext.create('PV.view.users.WindowUsers',{
					title:record.get('text')
				});
				window.show();
			break;
		}
	},

	onTodosGridItemClick: function(grid, record, item, index, e, eOpts) {
		this.getTodosForm().loadRecord(record);
	},

	addOrUpdateTodo: function(btn) {
		var values = btn.up('form').getForm().getValues();
		values.done = false,
		me = this;
		values.auth_token = localStorage.getItem('token');
		Ext.data.JsonP.request({
			url: Utils.Utils.url + 'api/add_todo.json',
			params: values,

			callback: function(c, resp) {
				if (resp.response.success === true) {
					me.getStore('Todos').load();
				} else {
					Ext.Msg.alert('Error', resp.response.message);
				}
			}
		});

	},
	onTodosGridBtnClick: function(btn) {
		switch (btn.accion) {
			case 'add':
				this.getTodosForm().expand();
				break;
			case 'edit':
				var records = btn.up('todosgrid').getSelectionModel().getSelection();
				if (Ext.isEmpty(records)) {
					Ext.Msg.alert('Aviso', 'Debes de seleccionar un pendiente');
				} else {
					this.getTodosForm().expand();
					this.getTodosForm().down('#addOrUpdate').setText('Editar');
				}
				break;
			case 'delete':
				var records = btn.up('todosgrid').getSelectionModel().getSelection();
				if (Ext.isEmpty(records)) {
					Ext.Msg.alert('Aviso', 'Debes de seleccionar un pendiente para eliminar');
				} else {
					this.deleteTodos(records);
				}
				break;
		}
	},
	deleteTodos: function(records) {
		var me = this;
		Ext.each(records, function(item) {
			Ext.data.JsonP.request({
				url: Utils.Utils.url + 'api/delete_todo.json',
				params: {
					id:item.get('id')
				},

				callback: function(c, resp) {
					if (resp.response.success === true) {
						me.getStore('Todos').load();
					} else {
						Ext.Msg.alert('Error', resp.response.message);
					}
				}
			});
		});
	},
	onLoginUser: function(form, btn, token) {
		this.showMainView();
		var privilegios = [
			{
				text:'Administración',
				icon:'icon-cog',
				action:'admin'
			},{
				text:'Usuarios',
				icon:'icon-users',
				action:'users'
			},{
				text:'Productos',
				icon:'icon-inbox',
				action:'products'
			},{
				text:'Salir',
				icon:'icon-logout',
				action:'logout'
			}
		];

		this.getStore('Menus').loadData(privilegios);

		localStorage.setItem('privilegios', Ext.encode(privilegios));

		localStorage.setItem('token', token);
	},
	onLaunch: function() {
		var privilegios;
		if (localStorage.getItem('token') && localStorage.getItem('privilegios')) {
			this.showMainView();

			privilegios = localStorage.getItem('privilegios');

			this.getStore('Menus').loadData(Ext.decode(privilegios));
		}
	},
	showMainView: function() {
		this.getMainView().layout.setActiveItem(1);
		this.getStore('Todos').load();
	}
});