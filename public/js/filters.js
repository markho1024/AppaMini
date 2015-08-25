/**
 * Created by mark on 15/8/10.
 */
'use strict';

var AppFilters = angular.module('Appa.filters', []);

AppFilters.filter('interpolate', ['version', function(version){
    return function(text){
        return String(text).replace(/\%VERSION\%/mg,version);
    }
}]);