Ext.define('VOCABI.view.Home', {
	extend: 'Ext.Panel', 
	xtype: 'homecard', 
	
	config: {
		iconCls: 'home', 
		title: 'Home', 
		html: [
			"<img id='homecard-logo' src='resources/images/logo.png' />", 
			"<div id='homecard-title'>Welcome to VOCABI</div>", 
			"<div id='homecard-intro'>VOCABI, a companion app<br />for the SAT Vocab Book. </div>"
		].join(""),
		styleHtmlContent: true
	}
}); 