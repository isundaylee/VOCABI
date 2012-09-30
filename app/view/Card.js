Ext.define("VOCABI.view.Card", {
	extend: "Ext.Carousel", 
	xtype: "cardview", 
	requires: ['VOCABI.view.WordCard'], 
	
	config: {
		title: 'Word Cards', 
		layout: 'card', 
		items: []
	},
	
	addWords: function(words) {
		for (i=0; i<words.length; i++) {
			word = words[i]; 
			wordView = Ext.create("VOCABI.view.WordCard"); 
			wordView.setWord(word); 
			this.add(wordView); 
		}
	}
}); 