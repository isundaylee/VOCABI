Ext.define('VOCABI.store.Words', {
	extend: 'Ext.data.Store', 
	config: {
		model: 'VOCABI.model.Word', 
		proxy: {
			type: 'ajax', 
			url: 'resources/json/words.json',
			reader: 'json'
		}
	}
}); 
