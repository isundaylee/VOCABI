Ext.application({
	name: 'VOCABI', 
	
	views: ['Main', 'Words'], 
	models: ['Wordlist', 'Word'], 
	stores: ['Wordlists', 'Words'],
	controllers: ['Wordlists', 'Search'], 
	
	launch: function() {
		Ext.Viewport.add([{xtype: 'mainview'}]); 
	}
}); 