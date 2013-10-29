requirejs.config({
	baseUrl: './js/',
	urlArgs: "v=0.1.0" + Math.random(),
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	},
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
		'underscore': 'underscore-min',
		'backbone': 'backbone-min'
	}
});


requirejs(['test1', 'test2', 'backbone'], function(test1, test2, Backbone) {

	var routeTest = Backbone.Router.extend({


		routes: {
			'lero/:p': 'leroFunc',
			'about': 'aboutFunc',
			'': 'defaultFunc'
		},

		defaultFunc: function() {
			$('#content').empty();
		},

		leroFunc: function(p) {
			$('#content').html('this is lero page. welcome! ' + p);
		},

		aboutFunc: function() {
			$('#content').html('ABOUT US');
		}
	});

	var rt = new routeTest();

	rt.routes['rucula/:id'] = 'ruculaFunc';

	rt.ruculaFunc = function(id) {
		$('#content').html('RUCULA x ' + id);
	}



	Backbone.history.start();
});