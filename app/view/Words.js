Ext.define('VOCABI.view.Words', {
	extend: 'Ext.Panel', 
	xtype: 'wordsview', 
	requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.data.ArrayStore', 'Ext.data.reader.Array'],
	
	config: {
		iconCls: 'list', 
		title: 'Words',
		layout: {
			type: 'fit'
		}, 
		items: [{
			xtype: 'list', 
			itemId: 'wordsList', 
			loadingText: 'Loading words...', 
			emptyText: '<div class="wordlistcard-list-text">No words found. </div>', 
			itemTpl: '<div class="wordlistcard-list-item">{word} {mean}</div>',
		}], 
		listeners: [{
			delegate: '#wordsList', 
			event: 'itemtap', 
			fn: 'onWordTap'
		}]
	}, 
	
	onWordTap: function(list, index, target, record, event) {
		console.log("Words list item tapped. ")
		this.fireEvent("showWordCommand", list, record); 
	}, 
	
	setStore: function(store) {
		this.child("#wordsList").setStore(store); 
	}
}); 