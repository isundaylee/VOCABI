Ext.define("VOCABI.controller.Notebook", {
	extend: 'Ext.app.Controller', 
	xtype: 'notebookcontroller', 
	
	config: {
		refs: {
			notebookCard: 'notebookcard', 
			mainView: 'mainview', 
			cardView: 'cardview'
		}, 
		control: {
			notebookCard: {
				showWord: 'onShowWord', 
				showWords: 'onShowWords'
			}
		}
	}, 
	
	launch: function() {
		this.callParent(arguments); 
		Ext.getStore("Notes").load(); 
		console.log("Notes store loaded. "); 
	}, 
	
	onShowWord: function(word) {
		Ext.create("VOCABI.view.Card");
		this.getCardView().setWords([word]); 
		this.getMainView().push(this.getCardView()); 
	}, 
	
	onShowWords: function(store) {
		arr = [];
		for (i=0; i<store.getCount(); i++) {
			arr.push(store.getAt(i)); 
		}
		if (arr.length > 0) {
			Ext.create("VOCABI.view.Card"); 
			this.getCardView().setWords(arr); 
			this.getMainView().push(this.getCardView()); 
		}
	}
}); 