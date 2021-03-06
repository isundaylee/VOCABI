Ext.define('VOCABI.store.Words', {
	extend: 'Ext.data.Store', 
	config: {
		model: 'VOCABI.model.Word', 
		grouper: {
			groupFn: function(record) {
				c = record.get('word').charAt(0); 
				return c.match(/[a-z]/i) ? c.toUpperCase() : '#'; 
			}
		}, 
		proxy: {
			type: 'ajax', 
			url: 'resources/json/words.json',
			reader: 'json'
		}
	}
}); 
