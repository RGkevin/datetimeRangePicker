/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {

	$scope.myDatetimeRange = {
		date: {
			from: new Date(),
			to: new Date()/*,
            min: new Date(),
            max: new Date()*/
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

    $scope.whentimechangedata = {};

    $scope.whenTimeChange = function (data) {
        $scope.whentimechangedata = data;
    };

    // show only time slider
    $scope.timeRangePicker = {
        time: {
            from: 480, // default low value
            to: 1020, // default high value
            step: 15, // step width
            minRange: 15, // min range
            hours24: false // true for 24hrs based time | false for PM and AM
        }
    };

    // show only date pickers
    $scope.dateRangePicker = {
        date: {
            from: new Date(),
            to: new Date()
        }
    };

    // directive with max range in date pickers
    var
        _today      = new Date(),
        _yesterday  = new Date( _today.getTime() - (86400000 * 10) );

    $scope.datePickerWithRange = {
        date: {
            from: new Date(),
            to: new Date(),
            max: _today,
            min: _yesterday
        }
    };
    $scope.maxRangeDate = 5; //days

}]);