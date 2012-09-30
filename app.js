Ext.application({
	name: 'VOCABI', 
	
	icon: 'resources/images/app-icon.png', 
	
	views: ['Main', 'Words', 'Card'], 
	models: ['Wordlist', 'Word', 'Note'], 
	stores: ['Wordlists', 'Words', 'Notes'],
	controllers: ['Wordlists', 'Search', 'Words', 'Notebook', 'Cards'], 
	
	launch: function() {
		Ext.Viewport.add([{xtype: 'mainview'}]);  
	}
});