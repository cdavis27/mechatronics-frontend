'use strict';

angular
.module('mechApp.join')
.service('PictureModal',
[ 		 '$modal', '$q',
function ($modal,   $q) {

	this.show = function(member) {
		var deferred = $q.defer();

		var modal = $modal.open({
            templateUrl: 'modules/join/picture-modal/picture-modal.html',
            controller: 'PictureModalCtrl',
            backdrop: 'static',
            resolve: {
                member: function() { return member }
            }
        });

        modal.result.then(function(data) {
        	deferred.resolve(data);
        }, function(error) {
        	deferred.reject(error);
        });

        return deferred.promise;
	}
}])

.directive('elementStyle', [function(){
    return {
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, iElm, iAttrs, controller) {
            var elementStyleJSON = iAttrs['elementStyle'].replace(/\'/g, '"');
            var elementStyle = angular.fromJson(elementStyleJSON);

            for (var element in elementStyle) {
                var style = elementStyle[element];
                $(iElm.find(element)).addClass(style);
            }
        }
    };
}])

.controller('PictureModalCtrl',
[		 '$scope', '$modalInstance', 'member',
function ($scope,   $modalInstance,   member) {
    $scope.member = member;

	$scope.save = function() {
        $modalInstance.close($scope.imageCropResult);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}])