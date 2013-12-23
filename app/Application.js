Ext.define('PV.Application', {
    name: 'PV',

    extend: 'Ext.app.Application',

    requires:[
        'Ext.data.JsonP',
        'Utils.Utils'
    ],

    views: [
        'PV.view.users.WindowUsers'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'Todos',
        'Menus'
    ]
});
