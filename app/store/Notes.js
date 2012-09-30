Ext.define('VOCABI.store.Notes', {
	extend: 'Ext.data.Store', 
	requires: ['Ext.data.proxy.LocalStorage'], 
	
	config: {
		model: 'VOCABI.model.Word', 
		grouper: {
			groupFn: function(record) {
				c = record.get('word').charAt(0); 
				return c.match(/[a-z]/i) ? c.toUpperCase() : '#'; 
			}
		}, 
		proxy: {
			type: 'localstorage', 
			id: 'vocabi-Notes'
		}
	}
}); 
