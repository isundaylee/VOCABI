Ext.define('VOCABI.view.Notebook', {
	extend: 'Ext.Panel', 
	xtype: 'notebookcard', 
	requires: ['Ext.dataview.List', 'Ext.Toolbar', 'Ext.Button'], 
	
	config: {
		iconCls: 'note2', 
		title: 'Notebook', 
		layout: 'fit',
		items: [{
			xtype: 'list', 
			store: 'Notes', 
			grouped: true, 
			indexBar: true, 
			itemId: 'notesList', 
			emptyText: '<div class="wordlistcard-list-text">No notes yet. </div>', 
			itemTpl: '{word}'
		}, {
			xtype: 'toolbar', 
			docked: 'bottom', 
			items: [{
				xtype: 'button', 
				itemId: 'showCardsButton', 
				text: 'Show Cards'
			}]
		}], 
		listeners: [{
			delegate: '#notesList', 
			event: 'itemtap', 
			fn: 'onNotesListItemTap'
		}, {
			delegate: '#showCardsButton', 
			event: 'tap', 
			fn: 'onShowCardsButtonTap'
		}]
	}, 
	
	onNotesListItemTap: function(list, index, target, record, event) {
		this.fireEvent('showWord', record); 
	}, 
	
	onShowCardsButtonTap: function() {
		this.fireEvent('showWords', this.child('#notesList').getStore()); 
	}
}); 