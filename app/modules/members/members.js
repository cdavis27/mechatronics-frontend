'use strict';

angular
.module('mechApp.members', [
	'ui.router'
])
.config(['$stateProvider', function ($stateProvider) {

}])
.controller('MembersCtrl', ['$scope', function($scope){

	// $scope.member = {
	// 	name: '',
	// 	email: ''
	// }

	$scope.hasValidEmail = function(member) {
		if (member && member.hasOwnProperty('email')) {
			return (member.email === 'parker');
		}

		return false;
	};
}]);