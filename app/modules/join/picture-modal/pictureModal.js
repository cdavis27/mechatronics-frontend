'use strict';

angular
.module('mechApp.join')
.service('PictureModal',
[ 		 '$modal', '$q',
function ($modal,   $q) {

	this.show = function() {
		var deferred = $q.defer();

		var modal = $modal.open({
            templateUrl: 'modules/join/picture-modal/picture-modal.html',
            controller: 'PictureModalCtrl'
        });

        modal.result.then(function(data) {
        	deferred.resolve(data);
        }, function(error) {
        	deferred.reject(error);
        });

        return deferred.promise;
	}
}])

.controller('PictureModalCtrl',
[		 '$modalInstance',
function ($modalInstance) {
	
}])