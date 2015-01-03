'use strict';

angular.module('mechApp.models', [
	'ngResource',
	'ngCookies',
	'mechApp.config'
])
.config(['$httpProvider', 'ModelProvider', 'API_URL', 'API_TOKEN',
function ($httpProvider,   ModelProvider,   API_URL,   API_TOKEN) {
	// This is for Token Auth to access the private, User part of the API
	$httpProvider.defaults.headers.common['Authorization'] = 'Token ' + API_TOKEN;

	ModelProvider.setBaseUrl(API_URL);
}])
.provider('Model', function() {
	var _baseUrl = '';

	this.setBaseUrl = function(value) {
		// remove trailing slash if present
		_baseUrl =  (value.substr(-1) === '/') ? value.substr(0, value.length-1) : value;
	}

	this.$get = ['$http', '$q', function($http, $q) {
		var methods = {
			getBaseUrl: function() {
				return _baseUrl;
			},
			makeUrl: function(endpoint) {
				return _baseUrl + '/' + endpoint;
			},
			http: {
				post: function(endpoint, payload) {
					var deferred = $q.defer();
					$http.post(methods.makeUrl(endpoint), payload)
					.success(function(data, status, headers, config) {
						deferred.resolve([data, status, headers, config]);
					})
					.error(function(data, status, headers, config) {
						deferred.reject([data, status, headers, config]);
					});

					return deferred.promise;
				}
			}
		};


		return methods;
	}];
})

////////////////////////
//		Member
////////////////////////

.provider('Member', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var Member = $resource(Model.makeUrl('members/:id'), {}, {});

		return Member;
	}];

})

////////////////////////
//		   Skill
////////////////////////

.provider('Skill', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var Skill = $resource(Model.makeUrl('skills/:id'), {}, {
		})

		return Skill;
	}];

})

////////////////////////
//		Project
////////////////////////

.provider('Project', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var Project = $resource(Model.makeUrl('projects/:id'), {}, {
		})

		return Project;
	}];

})

////////////////////////
//		HackNight
////////////////////////

.provider('HackNight', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var HackNight = $resource(Model.makeUrl('hack-nights/:id'), {}, {})

		return HackNight;
	}];

})

////////////////////////
//    Announcement
////////////////////////

.provider('Announcement', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var Announcement = $resource(Model.makeUrl('announcements/:id'), {}, {
		})

		return Announcement;
	}];

})

////////////////////////
//    join
////////////////////////

.provider('Join', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var Join = $resource(Model.makeUrl('join/:id'), {}, {
		})

		return Join;
	}];

})