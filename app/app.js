'use strict';

/**
 * @ngdoc overview
 * @name mechApp
 * @description
 * # mechApp
 *
 * Main module of the application.
 */
angular
.module('mechApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'mechApp.home',
    'mechApp.hackNights',
    'mechApp.members'
])
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'modules/home/home.html'
    })
    // $routeProvider
    // .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl'
    // })
    // .when('/hack-nights', {
    //     templateUrl: 'views/hack-nights.html',
    //     controller: 'HackNightsCtrl'
    // })
    // .when('/members', {
    //     templateUrl: 'views/members.html',
    //     controller: 'MembersCtrl'
    // })
    // .otherwise({
    //     redirectTo: '/'
    // });
}]);