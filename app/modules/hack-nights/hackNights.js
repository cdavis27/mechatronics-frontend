'use strict';

/**
 * @ngdoc function
 * @name mechApp.controller:HackNightCtrl
 * @description
 * # HackNightCtrl
 * Controller of the mechAppApp
 */
angular
.module('mechApp.hackNights', [
	'ui.router'
])
.config(['$stateProvider',
function ($stateProvider) {

	$stateProvider
	.state('app.hack-nights', {
		url: '/hack-nights',
		templateUrl: 'modules/hack-nights/hack-nights.html',
		controller: 'HackNightsCtrl'
	});

}])
.controller('HackNightsCtrl',
[	     '$scope',
function ($scope) {

}]);
