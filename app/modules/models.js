'use strict';

angular.module('mechApp.models', [
	'ngResource',
	'ngCookies'
])
.run([   '$http', '$cookies',
function ($http,   $cookies) {
	$cookies.test = 'tn4e0tqhax9o5kn2c1qbr661go6foijp';
	// $http.defaults.headers.Cookies = $cookies.test;
	// $http.defaults.headers.common['Cookies'] = 'Cookie:sessionid=tn4e0tqhax9o5kn2c1qbr661go6foijp; csrftoken=DnRV42duhXqe61UMFtqTbeJIgIGsotCc';
	$http.defaults.headers.common['x-csrftoken'] = 'DnRV42duhXqe61UMFtqTbeJIgIGsotCc';
	$http.defaults.headers.common['Authorization'] = 'Session tn4e0tqhax9o5kn2c1qbr661go6foijp';
}])
.provider('Model', function() {
	var _baseUrl = '';

	this.setBaseUrl = function(value) {
		// remove trailing slash if present
		_baseUrl =  (value.substr(-1) === '/') ? value.substr(0, value.length-1) : value;
	}

	this.$get = [function() {
		return {
			getBaseUrl: function() {
				return _baseUrl;
			},
			makeUrl: function(endpoint) {
				return _baseUrl + '/' + endpoint;
			}
		};
	}];
})
.provider('HackNight', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var HackNight = $resource(Model.makeUrl('hack-nights/:id'), {}, {
		})

		return HackNight;
	}];

});