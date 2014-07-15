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
            dFrom: 0, // lowest integer
            dTo: 1440, // highest integer
            step: 15, // step width
            minRange: 15, // min range
            hours24: false // true for 24hrs based time | false for PM and AM
		}
	};
    $scope.myDatetimeLabels = {
        date: {
            from: 'fecha inicio',
            to: 'fecha final'
        },
        time: {
            from: 'fecha final',
            to: 'fecha inicio'
        }
    };

}]);