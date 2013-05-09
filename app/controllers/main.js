angular.module('9jam')
    .controller('MainCtrl', function ($scope, $rootScope, User, Lancers, Defaults, $route, $location, $routeParams) {
        $rootScope.defaults = Defaults.get();
        $rootScope.user = User.get();
        $rootScope.lancers = Lancers.get();
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });