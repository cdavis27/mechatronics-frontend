'use strict';

angular
.module('mechApp.members', [
	'ui.router',
	'mechApp.models'
])
.config(['$stateProvider',
function ($stateProvider) {

	/*///// REMOVE COMMENTS TO ENABLE MEMBERS ////
	$stateProvider
	.state('app.members', {
		url: '/members',
		templateUrl: 'modules/members/members.html',
		controller: 'MembersCtrl'
	});
	// Don't forget to add the MEMBERS link
	// on the homepage
	*////////////////////////////////////////////

}])
.controller('MembersCtrl',
[  		 '$scope', 'Member',
function ($scope,   Member){
	$scope.members = Member.query();
}]);