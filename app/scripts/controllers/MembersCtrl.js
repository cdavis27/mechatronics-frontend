'use strict';

angular.module('mechatronicsApp.controllers')
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