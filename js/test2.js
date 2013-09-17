define(['jquery', 'backbone'], function($, Backbone) {

	var buttonName = Backbone.Model.extend({
		initialize: function() {
			var btn = this.get('btn');
			if(btn) {
				this.set({btn: $(btn)});
			}
		}
	});

	window.btnName = new buttonName({
		btn: '#result'
	});

	btnName.on('change:text', function(model, text) {
		model.get('btn').html(text);
	});

	$(document).on('keyup', '#txt-btn-name', function(ev) {
		btnName.set({text: this.value});
	});

});