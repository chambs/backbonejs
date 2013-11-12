define(['jquery', 'backbone', 'library', 'book'], function($, Backbone, Library, Book) {

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


	var book = new Book({
		id: 555,
		title: 'LIVRO $$$'
	});

	var Content = Backbone.View.extend({

		initialize: function() {
			this.listenTo(this.collection, 'add', function(model) {
				$('#books').append("<li data-id='" + model.get('id') + "'>" + model.get('title') + "</li>");
			});
			
			this.listenTo(this.collection, 'change', function(model) {
				$("[data-id='" + model.get('id') + "']").html(model.get('title'));
			});
			
			this.listenTo(this.collection, 'remove', function(model) {
				$('[data-id="' + model.get('id') + '"]', '#books').remove();
			});
			
		},

		el: $('#content'),
		collection: lib1,

		render: function() {

		},

		events: {
			'click li': 'clickLi'
		},

		clickLi: function(a, b, c) {
			this.collection.add({id: 2, title: 'frozô'});
		}
	});

	var lis = Backbone.View.extend({
		tagName: 'li',

		events: {
			'click .lero': 'lero'
		},

		lero: function(a,b) {
			console.log(a, b);
		}
	});

	aaa = new lis({
		id: 'lero'
	});

	window.content = new Content();
	window.lib1 = lib1;	
	window.book = book;

});