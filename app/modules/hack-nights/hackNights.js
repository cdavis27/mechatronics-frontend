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

////////////////////////////
//	   Hack Night List
////////////////////////////

.controller('HackNightsCtrl',
[	     '$scope', '$filter',
function ($scope,   $filter) {
	var tags = [
		'ios', 'bluetooth', 'teensy', 'servos', 'ultrasonic', 'electronics', 'project'
	];

	$scope.hackNights = [
		{
			id: 1,
			title: 'iOS BLE + Arduino',
			presenter: {full_name: 'Parker Lusk'},
			description: 'Learn how to use the Bluetooth LE (BLE) protocol to control an Ardunio missle shooter from a native iOS app.',
			date: '19-Nov-2014',
			tags: tags,
			repo: 'https://github.com/byu-mechatronics/shooter'
		},
		{
			id: 2,
			title: 'iOS BLE + Arduino',
			presenter: {full_name: 'Parker Lusk'},
			description: 'Learn how to use the Bluetooth LE (BLE) protocol to control an Ardunio missle shooter from a native iOS app.',
			date: '19-Nov-2014',
			tags: ['parker'],
			repo: 'https://github.com/byu-mechatronics/shooter'
		},
		{
			id: 3,
			title: 'iOS BLE + Arduino',
			presenter: {full_name: 'Parker Lusk'},
			description: 'Learn how to use the Bluetooth LE (BLE) protocol to control an Ardunio missle shooter from a native iOS app.',
			date: '19-Nov-2014',
			tags: tags,
			repo: 'https://github.com/byu-mechatronics/shooter'
		},
		{
			id: 4,
			title: 'iOS BLE + Arduino',
			presenter: {full_name: 'Parker Lusk'},
			description: 'Learn how to use the Bluetooth LE (BLE) protocol to control an Ardunio missle shooter from a native iOS app.',
			date: '19-Nov-2014',
			tags: ['test'],
			repo: 'https://github.com/byu-mechatronics/shooter'
		},
		{
			id: 5,
			title: 'iOS BLE + Arduino',
			presenter: {full_name: 'Parker Lusk'},
			description: 'Learn how to use the Bluetooth LE (BLE) protocol to control an Ardunio missle shooter from a native iOS app.',
			date: '19-Nov-2014',
			tags: tags,
			repo: 'https://github.com/byu-mechatronics/shooter'
		},
	];


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