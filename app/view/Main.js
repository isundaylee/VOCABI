Ext.define('VOCABI.view.Main', {
	extend: 'Ext.TabPanel', 
	
	requires: [
		'VOCABI.view.Home',
		'VOCABI.view.Wordlist', 
		'VOCABI.view.Search',
		'VOCABI.view.Notebook', 
		'VOCABI.view.Settings' 
	], 
	
	xtype: 'mainview', 
	
	config: {
		defaults: {
			styleHtmlContent: true
		}, 
		tabBar: {
			docked: 'bottom',
			layout: {
				pack: 'center'
			}
		}, 
		items: [
			{xtype: 'homecard'},
			{xtype: 'wordlistcard'},
			{xtype: 'searchcard'}, 
			{xtype: 'notebookcard'}, 
			{xtype: 'settingscard'}
		]
	}
}); 