'use strict';

angular.module('9jam', ['ui.bootstrap'])
    .config(function ($locationProvider,$routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html'
            })
            .when('/profile', {
                templateUrl: 'app/views/profile.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });