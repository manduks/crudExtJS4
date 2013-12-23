
Ext.define('PV.view.login.Form',{
	extend: 'Ext.form.Panel',

	title:'Login Form',
	xtype:'loginform',

	layout: 'anchor',
	bodyPadding: 5,
    
    defaults: {
        anchor: '90%',
        xtype:'textfield',
        allowBlank:false,
        msgTarget:'side'
    },

	items:[{		
		fieldLabel:'Email',
		name:'email',
		vtype:'email',
		value:'armando@cursa.me'
	},{
		fieldLabel:'Password',
		name:'password',
		maxLength:8,
		minLength:8,
		inputType:'password',
		value:'12345678'
	}],

	buttons:[{
		text:'Ingresar',
		disabled:true,
		formBind:true,
		handler:function (btn, e) {			
			//tiene premisos
			var form = btn.up('loginform');
			var values  = form.getForm().getValues();

			Ext.data.JsonP.request({

				url: Utils.Utils.url+'tokens/create.json',

				params:values,
				callback:function(respuesta,objetoRespuesta){
					if(objetoRespuesta.response.success === true){						
						form.fireEvent('dalepermiso',
							form,
							btn,
							objetoRespuesta.response.auth_token
						);
					}
					else{
						Ext.Msg.alert('Error',objetoRespuesta.response.message);
					}
				}
			});

		}
	}]
});