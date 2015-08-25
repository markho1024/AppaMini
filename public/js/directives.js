/**
 * Created by mark on 15/8/10.
 */
'use strict';

var AppDirectives = angular.module('Appa.directives',[]);
AppDirectives.directive('appVersion', ['version', function(version){
    return function (scope, elm, attrs){
        elm.text(version);
    }
}]);