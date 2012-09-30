Ext.define("VOCABI.controller.Cards", {
	extend: 'Ext.app.Controller', 
	
	config: {
		refs: {
			cardView: 'cardview'
		}, 
		control: {
			cardView: {
				toggleNote: 'onToggleNote'
			}
		}
	}, 
	
	onToggleNote: function(word) {
		store = Ext.getStore("Notes"); 
		res = store.findExact('word', word.get('word'));
		if (res != -1) {
			store.removeAt(res); 
		} else {
			store.add(word); 
		}
		store.sync(); 
		this.getCardView().refreshView(); 
	}
}); 