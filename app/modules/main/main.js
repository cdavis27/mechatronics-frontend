'use strict';

angular
.module('mechApp.main', [
	'ui.router'
])
.config(['$stateProvider',
function ($stateProvider) {
	$stateProvider
	.state('app.main', {
		url: '/',
		templateUrl: 'modules/main/main.html',
		controller: 'MainCtrl'
	});
}])
.controller('MainCtrl', function ($scope) {
	console.log("main ctrl")
})