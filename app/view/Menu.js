Ext.define('PV.view.Menu',{
	extend:'Ext.view.View',

	xtype:'pvmenu',


	store:'Menus',
	itemSelector: 'div.pv-menu-item',

	tpl:[
		'<tpl for=".">',
			'<div class="pv-menu-item">',
				'<i class="{icon}"></i><b>{text}</b>',
			'</div>',
			'<div style="clear:both"></div>',
		'</tpl>'
	].join('')
});