Ext.define("VOCABI.view.Card", {
	extend: "Ext.Carousel", 
	xtype: "cardview", 
	requires: ['VOCABI.view.WordCard'], 
	
	config: {
		title: 'Word Cards', 
		layout: 'card', 
		items: [{
			xtype: 'toolbar', 
			docked: 'bottom', 
			itemId: 'toolbar', 
			items: [{
				xtype: 'button', 
				itemId: 'toggleNoteButton', 
			}]
		}], 
		listeners: [{
			delegate: '#toggleNoteButton', 
			event: 'tap', 
			fn: 'onToggleNoteButtonTap'
		}], 
		words: []
	},
	
	initialize: function() {
		this.callParent(arguments); 
		this.on('activeitemchange', this.onActiveItemChange); 
	}, 
	
	applyWords: function(words) {
		this.removeAll(); 
		for (i=0; i<words.length; i++) {
			word = words[i]; 
			wordView = Ext.create("VOCABI.view.WordCard"); 
			wordView.setWord(word); 
			wordView.setNumId(i); 
			this.add(wordView); 
		}
		this.setIndicator(words.length <= 10); 
		this.child("#toolbar").setTitle("1/" + words.length); 
		return words; 
	}, 
	
	onActiveItemChange: function(view, card, oldcard) {
		this.refreshView(); 
	},
	
	setToolbarTitle: function(numId) {
		this.child("#toolbar").setTitle((numId + 1).toString() + "/" + this.getWords().length.toString()); 
	}, 
	
	onToggleNoteButtonTap: function() {
		console.log("triggered"); 
		this.fireEvent("toggleNote", this.getActiveItem().getWord()); 
	}, 
	
	refreshView: function() {
		console.log('Refreshed'); 
		card = this.getActiveItem(); 
		this.setToolbarTitle(card.getNumId()); 
		store = Ext.getStore("Notes"); 
		word = card.getWord(); 
		res = store.findExact('word', card.getWord().get('word')); 
		if (res != -1) {
			this.down("#toggleNoteButton").setText("Unnote"); 
		} else {
			this.down("#toggleNoteButton").setText("Note"); 
		}
	}
	
}); 