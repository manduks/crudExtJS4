Ext.define('PV.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'PV.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
