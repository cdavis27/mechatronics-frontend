'use strict';

angular
.module('mechApp.main', [
	'ui.router',
	'mechApp.tooltip',
	'oitozero.ngSweetAlert',
	'mechApp.models'
])
.config(['$stateProvider', '$tooltipProvider',
function ($stateProvider,   $tooltipProvider) {
	$stateProvider
	.state('app.main', {
		url: '/',
		templateUrl: 'modules/main/main.html',
		controller: 'MainCtrl'
	});
}])

.controller('MainCtrl',
[		 '$scope', '$http', 'Model', 'SweetAlert',
function ($scope,   $http,   Model,   SweetAlert) {
	$scope.contact = {};

	$scope.sendContact = function(contact) {
		var send = true;
		contact.error = {};

		// Validate name
		if (!contact.name || !contact.name.trim()) {
			send = false;
			contact.error.name = true;
		}

		// Validate email
		if (!isEmailValid(contact.email)) {
			send = false;
			contact.error.email = true;
		}

		// Validate message
		if (!contact.message || !contact.message.trim()) {
			send = false;
			contact.error.message = true;
		}

		if (send) {
			Model.http.post('contact', contact).then(function(data) {
				SweetAlert.swal("Sent!", "Thanks for contacting us, we will respond soon!", "success");
				$scope.contact = {};
			}, function(errorData) {
				SweetAlert.swal("Oops", "Something went wrong, and it's not your fault. Try again later!", "error");
			});
		}
	};

	var isEmailValid = function(email) {
		var validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return validEmailRegex.test(email);
	};
}])