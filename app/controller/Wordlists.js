Ext.define('VOCABI.controller.Wordlists', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			wordlistsListView: 'wordlistcard', 
			mainView: 'mainview', 
			wordsView: 'wordsview'
		}, 
		control: {
			wordlistsListView: {
				showWordlistCommand: 'onShowWordlistCommand'
			}
		}
	},
	
	launch: function() {
		this.callParent(arguments); 
		var wordlistsStore = Ext.getStore('Wordlists'); 
		wordlistsStore.load(); 
		console.log("Wordlists store loaded. "); 
	}, 
	
	onShowWordlistCommand: function(list, record) { 
		var wordsView = Ext.create("VOCABI.view.Words"); 
		wordsView.setStore(record.words()); 
		this.getMainView().push(wordsView); 
	}
}); 