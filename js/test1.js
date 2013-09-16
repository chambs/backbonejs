define(['jquery', 'backbone'], function($, Backbone) {
	var object = {};
	_.extend(object, Backbone.Events);

	object.on('alert', function(msg) {
		alert('triggered ' + msg);
	});



	return object;
});