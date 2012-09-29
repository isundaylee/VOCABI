Ext.application({
	name: 'VOCABI', 
	
	views: ['Main'], 
	
	launch: function() {
		Ext.Viewport.add([{xtype: 'mainview'}]); 
	}
}); 