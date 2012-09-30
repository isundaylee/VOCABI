Ext.define("VOCABI.controller.Words", {
	extend: "Ext.app.Controller", 
	
	config: {
		refs: {
			wordsView: 'wordsview', 
			mainView: 'mainview', 
			cardView: 'cardview'
		}, 
		control: {
			wordsView: {
				showWords: 'onShowWords', 
				showWord: 'onShowWord'
			}
		}
	}, 
	
	onShowWords: function(words) {
		arr = []; 
		for (i=0; i<words.getCount(); i++) {
			arr.push(words.getAt(i)); 
		}
		Ext.create("VOCABI.view.Card"); 
		this.getCardView().addWords(arr); 
		this.getMainView().push(this.getCardView()); 
	}, 
	
	onShowWord: function(word) {
		Ext.create("VOCABI.view.Card"); 
		this.getCardView().addWords([word]); 
		this.getMainView().push(this.getCardView()); 
	}
}); 