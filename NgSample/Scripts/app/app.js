// Main configuration file. Sets up AngularJS module and routes and any other config objects

var appRoot = angular.module('main', ['ngRoute', 'ngResource']);     //Define the main module

appRoot
    .config(['$routeProvider', function ($routeProvider) {
        //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
        $routeProvider
            .when('/home', { templateUrl: '/home/main', controller: 'HelloController' })
            .when('/tree', { templateUrl: '/home/tree', controller: 'TreeController' })
            .when('/clock', { templateUrl: '/home/clock',       controller: 'ClockController'   })
            .when('/calc',  { templateUrl: '/home/calculator',  controller: 'AddController'     })
            .otherwise({ redirectTo: '/home' });
    }])
    .controller('RootController', ['$scope', '$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
             $scope.activeViewPath = $location.path();
        });
    }]);