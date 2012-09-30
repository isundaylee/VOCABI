Ext.application({
	name: 'VOCABI', 
	
	icon: 'resources/images/app-icon.png', 
	
	views: ['Main', 'Words', 'Card'], 
	models: ['Wordlist', 'Word'], 
	stores: ['Wordlists', 'Words'],
	controllers: ['Wordlists', 'Search', 'Words'], 
	
	launch: function() {
		Ext.Viewport.add([{xtype: 'mainview'}]);  
	}
}); 