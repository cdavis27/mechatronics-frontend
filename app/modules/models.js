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

	this.$get = ['$resource', 'Model', '$http', '$q', function($resource, Model, $http, $q) {
		var Member = $resource(Model.makeUrl('members/:id'), {}, {});

		Member.prototype.createWithImage = function() {
			var deferred = $q.defer();

		    var fd = new FormData();

		    // add any extra fields that the REST API needs
		    for (var field in this) {
		    	if (this.hasOwnProperty(field)) {
		    		if (this[field]) {
		    			var value = this[field];

		    			if (field === 'profile_picture') {
		    				value = dataURItoBlob(this[field]);
		    				var filename = this.first_name.toLowerCase() + '_' +
		    							   this.last_name.toLowerCase() + '.png';
		    				fd.append(field, value, filename);
		    			} else {
							if (value.constructor === Array) {
								// iterate here
								for (var i=0; i<value.length; i++) {
									fd.append(field, value[i]);
								}
							} else {
		    					fd.append(field, value);
		    				}
		    			}
		    		}
		    	}
		    }

		    var url = Model.getBaseUrl() + '/members';

		    $http.post(url, fd, {
		        transformRequest: angular.identity,
		        headers: {'Content-Type': undefined}
		    }).success(function(data){
		    	deferred.resolve(data);
		    }).error(function(data){
		    	deferred.reject(data);
		    });

		    return deferred.promise;

		};

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
//    FieldOfStudy
////////////////////////

.provider('FieldOfStudy', function() {

	this.$get = ['$resource', 'Model', function($resource, Model) {
		var FieldOfStudy = $resource(Model.makeUrl('field-of-studies/:id'), {}, {
		})

		return FieldOfStudy;
	}];

})

function dataURItoBlob(dataURI)
{
    var byteString = atob(dataURI.split(',')[1]);

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++)
    {
        ia[i] = byteString.charCodeAt(i);
    }

    var bb = new Blob([ab], { "type": mimeString });
    return bb;
}