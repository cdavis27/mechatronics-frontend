'use strict';

angular
.module('mechApp.join', [
	'ui.router',
	'mechApp.models'
])
.config(['$stateProvider',
function ($stateProvider) {

	$stateProvider
	.state('app.join', {
		url: '/join',
		templateUrl: 'modules/join/join.html',
		controller: 'JoinCtrl'
	});

}])

.controller('JoinCtrl',
[	     '$scope', '$filter', 'HackNight',
function ($scope,   $filter,   HackNight) {

}])