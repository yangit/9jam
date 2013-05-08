angular.module('9jam')
    .controller('MainCtrl', function ($scope, $rootScope, User, Lancers) {
        $rootScope.user = User.get();
        $rootScope.lancers = Lancers.get();
    });