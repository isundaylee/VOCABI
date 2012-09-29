Ext.define('VOCABI.controller.Search', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			searchView: 'searchcard', 
			mainView: 'mainview'
		}, 
		control: {
			searchView: {
				refilterSearch: 'onRefilterSearch'
			}
		}
	},
	
	launch: function() {
		this.callParent(arguments); 
		var wordsStore = Ext.getStore('Words'); 
		wordsStore.load(); 
		console.log("Words store loaded. "); 
	}, 
	
	onRefilterSearch: function(view, value) {
		Ext.getStore("Words").clearFilter(); 
		Ext.getStore("Words").filter("word", new RegExp(value, 'i'));  
		view.refresh(); 
	}
}); 