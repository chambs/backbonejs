define(['jquery', 'backbone'], function($, Backbone) {
	var object = {};
	_.extend(object, Backbone.Events);


	var buttons = {
		okAction: function(data) {
			alert('OK: ' + data);
		},

		cancelAction: function(data) {
			alert('CANCEL: ' + data);
		},

		ruculaAction: function(data) {
			alert('RUCULA: ' + data);
		}
	};

	object.on({
		'btn:ok': buttons.okAction,
		'btn:cancel': buttons.cancelAction,
		'btn:rucula': buttons.ruculaAction,
		all: function(eventName) {
			console.log('Event triggered was ' + eventName);
		}
	});

	$(document).on('click', '#ok', function(ev) {
		object.trigger('btn:ok', 'Ok man!');
	});

	$(document).on('click', '#cancel', function(ev) {
		object.trigger('btn:cancel', 'CANCEL!');
	});

	$(document).on('click', '#rucula', function(ev) {
		object.trigger('btn:rucula', 'RUCULA IS FREAKING COOL');
	});

	return object;
});