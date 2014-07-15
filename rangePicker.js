/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('rgkevin.datetimeRangePicker', []).directive('rgRangePicker', [ function () {

	return {
		restrict: 'A',
		scope: {
            data: '=rgRangePicker',
            labels: '='
		},

		// replace: true,
		template: function(element, attrs) {
			var defaultsAttrs ={
                data: {
                    date: {
                        from: new Date(),
                        to: new Date()
                    },
                    time: {
                        from: 0,
                        to: 1440 // minutes in a day
                    }
                }
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}

			return '<div class="rg-range-picker">' +
                        '<div class="rg-range-picker-box well">' +
                            '<div class="rg-range-picker-calendars">' +
                                '<div class="rg-range-picker-calendar-box">' +
                                    '<h5 class="rg-range-picker-calendar-label" ng-bind-template="{{labels.date.from}}"></h5>' +
                                    '<datepicker ng-model="data.date.from" show-weeks="true" class="clean-calendar"></datepicker>' +
                                '</div>' +
                                '<div class="rg-range-picker-calendar-box right">' +
                                    '<h5 class="rg-range-picker-calendar-label" ng-bind-template="{{labels.time.from}}"></h5>' +
                                    '<datepicker ng-model="data.date.to" show-weeks="true" class="clean-calendar"></datepicker>' +
                                '</div>' +
                            '</div>' +
                            '<div class="ng-range-picker-slider">' +
                                '<div class="ng-range-picker-slider-labels">' +
                                    '<div class="row">' +
                                        '<div class="col-sm-6 text-center"><span class="label label-range-picker">{{data.time.from}}</span></div>' +
                                        '<div class="col-sm-6 text-center"><span class="label label-range-picker">{{data.time.to}}</span></div>' +
                                        '<div class="ng-range-picker-divider"><span class="label">to</span></div>' +
                                    '</div>' +
                                '</div>' +
                                '<div slider translate-fn="test" class="clean-slider" ng-model="data.time.from" ng-model-range="data.time.to" floor="{{data.time.dFrom}}" ceiling="{{data.time.dTo}}" buffer="1" step="1" step-width="1" precision="0" stretch="3"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
		},

		link: function(scope, element, attrs) {
            console.log('scope, element, attrs', scope, element, attrs);
            scope.test = function (value) {
                console.log('value', value);
                return value * 2;
            };
            // define labels
            var
                defaultLabels = {
                    date: {
                        from: 'fecha inicio',
                        to: 'fecha final'
                    },
                    time: {
                        from: 'fecha final',
                        to: 'fecha inicio'
                    }
                };
            for(var xx in (scope.labels || {})) {
                if(scope.labels[xx] ===undefined) {
                    scope.labels[xx] =defaultLabels[xx];
                }
            }

		},

		controller: function($scope, $element, $attrs) {
		}
	};
}]);