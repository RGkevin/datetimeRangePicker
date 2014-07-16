/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
	//TODO - put any directive code here
	$scope.myDatetimeRange = {
		date: {
			from: new Date(),
			to: new Date()
		},
		time: {
			from: 480, // default low value
			to: 1020, // default high value
            step: 15, // step width
            minRange: 15, // min range
            hours24: false // true for 24hrs based time | false for PM and AM
		}
	};
    $scope.myDatetimeLabels = {
        date: {
            from: 'Start date',
            to: 'End date'
        }
    };
    $scope.toggle = true;
    $scope.toggleDirective = function() {
    	$scope.toggle = !$scope.toggle;
    };

}]);