Ext.define('VOCABI.store.Wordlists', {
	extend: 'Ext.data.Store', 
	config: {
		model: 'VOCABI.model.Wordlist', 
		proxy: {
			type: 'ajax', 
			url: 'resources/json/wordlists.json',
			reader: 'json'
		}
	}
}); 
