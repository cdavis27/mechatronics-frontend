'use strict';

/**
 * @ngdoc function
 * @name mechAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mechAppApp
 */
angular.module('mechAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
