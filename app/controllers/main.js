angular.module('9jam')
    .controller('MainCtrl', function ($scope, $rootScope, User, Lancers, Defaults, $route, $location, $routeParams, i10n) {
        $rootScope.__=i10n.get();
        $rootScope.defaults = Defaults.get();
        $rootScope.user = User.get();
        $rootScope.lancers = Lancers.get();
        $rootScope.$route = $route;
        $rootScope.$location = $location;
        $rootScope.$routeParams = $routeParams;
    });