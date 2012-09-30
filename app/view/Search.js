Ext.define('VOCABI.view.Search', {
	extend: 'Ext.Panel', 
	xtype: 'searchcard', 
	requires: ['Ext.field.Search', 'Ext.dataview.List'], 
	
	config: {
		iconCls: 'search', 
		title: 'Search', 
		layout: {
			type: 'vbox', 
			aligh: 'strech'
		}, 
		items: [{
			xtype: 'searchfield', 
			itemId: 'searchField',
			placeHolder: 'Type to search. '
		}, {
			xtype: 'list', 
			flex: 1, 
			store: 'Words', 
			itemId: 'wordsList', 
			grouped: true, 
			indexBar: true, 
			loadingText: 'Loading words...', 
			emptyText: '<div class="wordlistcard-list-text">No words found. </div>', 
			itemTpl: '<div class="wordlistcard-list-item">{word}</div>'
		}],
		listeners: [{
			delegate: '#searchField', 
			event: 'keyup',
			fn: 'onSearchFieldKeyUp'
		}, {
			delegate: '#searchField', 
			event: 'clearicontap', 
			fn: 'onSearchFieldClear'
		}, {
			delegate: '#wordsList', 
			event: 'itemtap', 
			fn: 'onWordsListItemTap'
		}]
	}, 
	
	onSearchFieldKeyUp: function () {
		this.fireEvent("refilterSearch", this, this.getSearchValue()); 
	},
	
	onSearchFieldClear: function() {
		this.fireEvent("refilterSearch", this, ''); 
	},
	
	getSearchValue: function() {
		return this.down("#searchField").getValue(); 
	}, 
	
	onWordsListItemTap: function(list, index, target, record, event) {
		this.fireEvent("showWord", list, record); 
	}
}); 