'use strict';

/**
 * @ngdoc function
 * @name mechAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mechAppApp
 */
angular.module('mechAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
