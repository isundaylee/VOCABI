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
		var store = record.words(); 
		store.setGrouper({
			groupFn: function(record) {
				c = record.get('word').charAt(0); 
				return c.match(/[a-z]/i) ? c.toUpperCase() : '#'; 
			}
		}); 
		wordsView.setStore(store); 
		this.getMainView().push(wordsView); 
	}
}); 