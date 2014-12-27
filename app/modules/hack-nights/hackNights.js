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
	'ui.router',
	'mechApp.models'
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

////////////////////////////
//	   Hack Night List
////////////////////////////

.controller('HackNightsCtrl',
[	     '$scope', '$filter', 'HackNight',
function ($scope,   $filter,   HackNight) {

	$scope.hackNights = HackNight.query();

	$scope.showMore = function(hackNight) {
		console.log("Show more of:", hackNight);
	};

	$scope.showTag = function(tag) {

	};

}])

//////////////////////////////
//		HackNightFilter
//////////////////////////////

.filter('byHackNight',
[		 '$filter',
function ($filter) {
	return function(hackNights, searchText) {

		// The output is going to be an array, also we want to use concat immediately
		var output = [];

		// Match the title
		output = output.concat($filter('filter')(hackNights, {title:searchText}));

		// Match the presenter
		output = output.concat($filter('filter')(hackNights, {presenter:{full_name: searchText}}));

		// Match the tags
		output = output.concat($filter('filter')(hackNights, {tags:searchText}));

		// Only return the unique elements, otherwise Angular will complain about
		// a "can't have duplicates" error (usually solved by 'track by')
		return $.unique(output);

	};
}]);