'use strict';

/**
 * @ngdoc function
 * @name mechatronicsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mechAppApp
 */
angular.module('mechatronicsApp.controllers')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
