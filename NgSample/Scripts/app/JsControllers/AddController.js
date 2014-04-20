// Add
appRoot.controller('AddController', ['$scope', function ($scope) {
    $scope.counter = 0;
    $scope.add = function (amount) { $scope.counter += amount; };
    $scope.subtract = function (amount) { $scope.counter -= amount; };
}]);