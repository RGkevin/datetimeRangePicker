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

angular.module('rgkevin.datetimeRangePicker', [])
    .filter('rgTime', [function () {
        /**
         * input should be a number of minutes to be parsed
         * @param {input} number of minutes
         * @param {type} true = 00:00:00 | false = 00:00 am or pm
         */
        return function (input, type) {
            var
                hours = parseInt( input / 60, 10 ),
                minutes = parseInt( input - (hours * 60) ) || '00',
                meridian = type ? ':00' : ( hours >= 12 && hours !== 24 ? ' pm' : ' am' );

            return (!type && hours > 12 ? (hours === 24 ? '00' : (hours - 12 < 10 ? '0': '' ) + (hours - 12) ) : (hours < 10 ? '0' : '') + hours) + ':' + minutes + meridian;
        };
    }])
    .directive('rgRangePicker', [ '$compile', function ($compile) {

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
                                    '<datepicker ng-model="data.date.from" max-date="data.date.to" show-weeks="false" class="clean-calendar"></datepicker>' +
                                '</div>' +
                                '<div class="rg-range-picker-calendar-box right">' +
                                    '<h5 class="rg-range-picker-calendar-label" ng-bind-template="{{labels.date.to}}"></h5>' +
                                    '<datepicker ng-model="data.date.to" min-date="data.date.from" show-weeks="false" class="clean-calendar"></datepicker>' +
                                '</div>' +
                            '</div>' +
                            '<div class="rg-range-picker-slider" id="rgRangePickerSliderContainer">' +
                                '<div class="rg-range-picker-slider-labels">' +
                                    '<div class="row">' +
                                        '<div class="rg-range-picker-divider xs-hidden"><span class="label">to</span></div>' +
                                        '<div class="col-sm-6 text-center"><span class="label label-range-picker">{{data.time.from | rgTime:data.time.hours24}}</span></div>' +
                                        '<div class="col-sm-6 text-center"><span class="label label-range-picker">{{data.time.to | rgTime:data.time.hours24}}</span></div>' +
                                    '</div>' +
                                '</div>' +
                                //'<div slider class="clean-slider" ng-model="data.time.from" ng-model-range="data.time.to" floor="{{data.time.dFrom}}" ceiling="{{data.time.dTo}}" buffer="{{data.time.minRange || 1}}" step="{{data.time.step || 1}}" step-width="{{data.time.step || 1}}" precision="0" stretch="3"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
		},

		link: function(scope, element, attrs) {
            // define labels
            var
                sliderContainer     = angular.element('#rgRangePickerSliderContainer', element[0]),
                slider              = angular.element( '<div slider class="clean-slider" ng-model="data.time.from" ng-model-range="data.time.to" floor="{{data.time.dFrom}}" ceiling="{{data.time.dTo}}" buffer="{{data.time.minRange || 1}}" step="{{data.time.step || 1}}" step-width="{{data.time.step || 1}}" precision="0" stretch="3"></div>' ),
                sliderAlreadyRender = false,
                defaultLabels = {
                    date: {
                        from: 'Start date',
                        to: 'End date'
                    }
                },
                timeDefaults = {
                    from: 480, // default low value
                    to: 1020, // default high value
                    dFrom: 0, // lowest integer
                    dTo: 1440, // highest integer
                    step: 15, // step width
                    minRange: 15, // min range
                    hours24: true // true for 00:00:00 format and false for 00:00 am or pm
                };

            scope.labels = angular.extend(defaultLabels, scope.labels);
            scope.data.time = angular.extend(timeDefaults, scope.data.time);

            function renderSlider () {
                if(!sliderAlreadyRender) {
                    sliderContainer.append( slider );
                    $compile( slider )( scope );
                    sliderAlreadyRender = true;
                }
            }

            if ( attrs.collapse ) {
                scope.$watch( function() {
                    return element[0].className;
                }, function() {
                    if(element.hasClass('in')) {
                        // render slider
                        renderSlider();
                    }
                });
                //renderSlider();
            } else {
                renderSlider();
            }

		},

		controller: function($scope, $element, $attrs) {
		}
	};
}]);