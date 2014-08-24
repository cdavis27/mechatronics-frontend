'use strict';

angular.module('mechatronicsApp.controllers', []);
angular.module('mechatronicsApp.services', []);
angular.module('mechatronicsApp.directives', []);
angular.module('mechatronicsApp.filters', []);


/**
 * @ngdoc overview
 * @name mechatronicsApp
 * @description
 * # mechatronicsApp
 *
 * Main module of the application.
 */
angular
.module('mechatronicsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mechatronicsApp.controllers',
    'mechatronicsApp.services',
    'mechatronicsApp.directives',
    'mechatronicsApp.filters'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});