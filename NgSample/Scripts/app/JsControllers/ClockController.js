﻿// Clock
angular.module('main')
.controller('ClockController', ['$scope', function ($scope) {
    $scope.clock = new Date();
    var updateClock = function () {
        $scope.clock = new Date();
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
}]);