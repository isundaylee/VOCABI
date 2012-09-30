Ext.define('VOCABI.controller.Search', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			searchView: 'searchcard', 
			mainView: 'mainview', 
			cardView: 'cardview'
		}, 
		control: {
			searchView: {
				refilterSearch: 'onRefilterSearch',
				showWord: 'onShowWord'
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
	}, 
	
	onShowWord: function(list, word) {
		console.log("Word " + word.data.word + " tapped. "); 
		Ext.create("VOCABI.view.Card"); 
		this.getCardView().setWords([word]); 
		this.getMainView().push(this.getCardView()); 
	}
}); 