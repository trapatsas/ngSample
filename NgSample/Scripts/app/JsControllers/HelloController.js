// Hello
angular.module('main')
.controller('HelloController', ['$scope', function ($scope) {
    $scope.message = "hello";
    $scope.person = {
        name: "Stranger"
    };
}]);