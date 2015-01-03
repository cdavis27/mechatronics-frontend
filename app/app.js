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
    'ui.bootstrap',
    'ngSanitize',
    'ngTouch',
    'mechApp.main',
    'mechApp.hackNights',
    'mechApp.members',
    'mechApp.join',
    'mechApp.models'
])
.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider,   $urlRouterProvider) {

    $stateProvider
    .state('app', {
        abstract: true,
        views: {
            'root': { templateUrl: '/views/layout.tpl.html' },
        }
    });
    $urlRouterProvider.otherwise('/');
    
}])
.run([   '$rootScope', '$state', '$stateParams',
function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    
}]);