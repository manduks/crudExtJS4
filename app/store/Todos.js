Ext.define('PV.store.Todos',{
	extend:'Ext.data.Store',
	requires:['PV.model.Todo'],

	model:'PV.model.Todo',
	
	listeners:{
		beforeload:function (store, operations) {
			store.getProxy().extraParams={
				auth_token: 'iBqd8wAZB4f6qXtREhbX'
			}
		}
	}
});