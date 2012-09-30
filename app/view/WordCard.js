Ext.define("VOCABI.view.WordCard", {
	extend: "Ext.Panel", 
	xtype: 'wordcardview', 
	
	config: {
		tpl: [
			'<div id="wordcard-title">{word}</div>', 
			'<div id="wordcard-ps">/{ps}/</div>',
			'<div id="wordcard-mean">{mean}</div>', 
			'<div id="wordcard-desc">{desc}</div>', 
			'<div id="wordcard-sample">{sample}</div>'
		], 
		styleHtmlContent: true
	}, 
	
	setWord: function(word) {
		data = {
			word: word.data.word, 
			ps: word.data.ps, 
			mean: word.data.mean, 
			desc: word.data.desc, 
			sample: word.data.sample
		}; 
		if (data.sample.trim() != '') {
			samples = data.sample.split(/\s*#\s*/); 
			samples = samples.map(function (sample) {
				if (sample[0] == '~') {
					sample = "<i>" + data.word[0].toUpperCase() + data.word.slice(1) + "</i>" + sample.slice(1); 
				}
				sample = sample.replace("~", "<i>" + data.word + "</i>"); 
				sample = [
					"<li>", 
					sample, 
					"</li>"
				].join("");
				return sample;  
			}); 
			data.sample = [
				"<ol id='wordcard-sample-list'>", 
				samples.join(""), 
				"</ol>"
			].join(""); 
		}
		if (data.desc.trim() != '') {
			data.desc = [
				"<ul id='wordcard-desc-list'><li>", 
				data.desc, 
				"</li></ul>"
			].join(""); 
		}
		this.setHtml(this.getTpl().apply(data)); 
	}
}); 