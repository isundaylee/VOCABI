Ext.define('VOCABI.model.Wordlist', {
	extend: 'Ext.data.Model', 
	
	config: {
		fields: [
			{name: 'title', type: 'string'}
		], 
		hasMany: [{
			model: 'VOCABI.model.Word', 
			name: 'words', 
			associationKey: 'words'
		}]
	}
}); 