'use strict';

angular
.module('mechApp.members', [
	'ui.router'
])
.config(['$stateProvider',
function ($stateProvider) {

	$stateProvider
	.state('app.members', {
		url: '/members',
		templateUrl: 'modules/members/members.html',
		controller: 'MembersCtrl'
	});

}])
.controller('MembersCtrl',
[  		 '$scope',
function ($scope){

	$scope.hasValidEmail = function(member) {
		if (member && member.hasOwnProperty('email')) {
			return (member.email === 'parker');
		}

		return false;
	};
}]);