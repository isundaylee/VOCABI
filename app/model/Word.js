Ext.define('VOCABI.model.Word', {
	extend: 'Ext.data.Model', 
	
	config: {
		fields: [
			{name: 'word', type: 'string'},
			{name: 'ps', type: 'string'},
			{name: 'mean', type: 'string'},
			{name: 'desc', type: 'string'},
			{name: 'sample', type: 'string'}
		]
	}
}); 