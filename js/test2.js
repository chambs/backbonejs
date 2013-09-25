define(['jquery', 'backbone', 'library'], function($, Backbone, Library) {

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


	var lib1 = new Library();

	lib1.on('change', function(model, x) {
		console.log('mudou', model, x);
	});

	lib1.on('add', function(model, x) {
		$('#books').append("<li data-id='" + model.get('id') + "'>" + model.get('title') + "</li>");
	});

	lib1.on('remove', function(model, x) {
		$('[data-id="' + model.get('id') + '"]', '#books').remove();
	});

	var Content = Backbone.View.extend({
		el: $('#content'),
		collection: lib1,

		render: function() {

		},

		events: {
			'click li': 'clickLi'
		},

		clickLi: function(a, b, c) {
			this.collection.add({id: 2, title: 'frozô'});
			console.log(a, b, c);
		}
	});

	window.content = new Content();
	window.lib1 = lib1;	

});