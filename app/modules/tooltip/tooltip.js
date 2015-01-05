'use strict';

angular
.module('mechApp.tooltip', [
	'ui.bootstrap'
])
.config(['$tooltipProvider',
function ($tooltipProvider) {
	$tooltipProvider.setTriggers({
		'show': 'hide'
	});
}])

.directive('popoverShow', [function(){
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			$scope.$watch(iAttrs.popoverShow, function(newVal, oldVal) {
				if (newVal != oldVal) {
					var toggle = (newVal) ? 'show' : 'hide';
					setTimeout(function() {
						iElm.trigger(toggle);
					}, 1);
					
				}
			});
		}
	};
}])