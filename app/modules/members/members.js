'use strict';

angular
.module('mechApp.members', [
	'ui.router',
	'mechApp.models'
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
[  		 '$scope', 'Member',
function ($scope,   Member){
	$scope.members = Member.query();
}]);