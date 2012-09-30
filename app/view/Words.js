Ext.define('VOCABI.view.Words', {
	extend: 'Ext.Panel', 
	xtype: 'wordsview', 
	requires: ['Ext.TitleBar', 'Ext.dataview.List'],
	
	config: {
		iconCls: 'list', 
		title: 'Words',
		layout: {
			type: 'vbox'
		},  
		items: [{
			xtype: 'list', 
			itemId: 'wordsList', 
			loadingText: 'Loading words...', 
			indexBar: true, 
			grouped: true, 
			emptyText: '<div class="wordlistcard-list-text">No words found. </div>', 
			itemTpl: '<div class="wordlistcard-list-item">{word}</div>',
			flex: 1
		}, {
			xtype: 'toolbar', 
			docked: 'bottom', 
			items: [{
				xtype: 'button', 
				text: 'Show Cards', 
				itemId: 'showCardsButton'
			}]
		}], 
		listeners: [{
			delegate: '#wordsList', 
			event: 'itemtap', 
			fn: 'onWordTap'
		}, {
			delegate: '#showCardsButton', 
			event: 'tap', 
			fn: 'onShowCardsButtonTap'
		}]
	}, 
	
	onWordTap: function(list, index, target, record, event) {
		console.log("Words list item tapped. ")
		this.fireEvent("showWord", record); 
	}, 
	
	setStore: function(store) {
		this.child("#wordsList").setStore(store); 
	}, 
	
	onShowCardsButtonTap: function() {
		this.fireEvent("showWords", this.child('#wordsList').getStore());
	}
}); 