'use strict';
/**
 * UserController
 */
var UserController = function($scope, $http) {
    $scope.formData = {};
    $scope.fetchUsersList = function() {
        $http.get('users').success(function(userList){
            $scope.users = userList;
        });
    };
    $scope.addNewUser = function() {
        $http.put('user',$scope.formData).success(function() {
            $scope.fetchUsersList();
            $scope.formData.user = {};
        });
    };
    $scope.removeUser = function(userId) {
        $http.delete('user/' + userId).success(function() {
            $scope.fetchUsersList();
        });
    };
    $scope.removeAllUsers = function() {
        $http.delete('users').success(function() {
            $scope.fetchUsersList();
        });
    };
    $scope.fetchUsersList();
};