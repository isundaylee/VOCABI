Ext.define('VOCABI.view.Main', {
	extend: 'Ext.navigation.View', 
	xtype: 'mainview', 
	requires: ['Ext.tab.Panel', 'VOCABI.view.Home', 'VOCABI.view.Wordlist', 'VOCABI.view.Search', 'VOCABI.view.Notebook', 'VOCABI.view.Settings'], 
	id: 'mainView', 
	
	config: {
		items: [{ 
			title: 'VOCABI', 
			xtype: 'tabpanel', 
	
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
		}]
	}
}); 