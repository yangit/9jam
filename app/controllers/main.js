angular.module('9jam')
    .controller('MainCtrl', function ($scope, $rootScope, User, Users) {
        $rootScope.user = User.get();
        $rootScope.users = Users.get();
    });