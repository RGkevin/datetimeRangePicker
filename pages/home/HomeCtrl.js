/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
	//TODO - put any directive code here
	$scope.myDatetimeRange = {
		date: {
			from: new Date('2014-05-15'),
			to: new Date()
		},
		time: {
			from: 5, // default low value
			to: 10, // default high value
            dFrom: 0, // lowest integer
            dTo: 24, // highest integer
            step: 1, // step width,
            minLength: 1 // min range
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