Ext.define('VOCABI.view.Wordlist', {
	extend: 'Ext.Panel', 
	xtype: 'wordlistcard', 
	requires: ['Ext.dataview.List'],
	
	config: {
		iconCls: 'list', 
		title: 'Wordlist',
		layout: {
			type: 'fit'
		}, 
		items: [{
			xtype: 'list', 
			store: 'Wordlists', 
			itemId: 'wordlistsList', 
			loadingText: 'Loading wordlists...', 
			emptyText: '<div class="wordlistcard-list-text">No wordlists found. </div>', 
			itemTpl: '<div class="wordlistcard-list-item">{title}</div>',
		}], 
		listeners: [{
			delegate: '#wordlistsList', 
			event: 'itemtap', 
			fn: 'onWordlistTap'
		}]
	}, 
	
	onWordlistTap: function(list, index, target, record, event) {
		console.log("Wordlists list item tapped. ");
		this.fireEvent("showWordlistCommand", this, record);
	}
}); 