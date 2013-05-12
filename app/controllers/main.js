angular.module('9jam')
    .controller('MainCtrl', function ($scope, $rootScope, User, Users, Defaults, $route, $location, $routeParams, i18n,Utils) {
        $rootScope.__=i18n.get();
        $rootScope.defaults = Defaults.get();
        $rootScope.user = User.get();
        $rootScope.utils = Utils.get();
        $rootScope.users = Users.get();
        $rootScope.$route = $route;
        $rootScope.$location = $location;
        $rootScope.$routeParams = $routeParams;
        $scope.searchLancer=$rootScope.defaults.searchLancer;
    });