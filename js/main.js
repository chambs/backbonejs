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


requirejs(['test1'], function(test1) {

	setTimeout(function() {
		test1.trigger('alert', 'WWow it works !!!');
	}, 2000);

});