user = {}
angular.module('9jam')
    .factory('User', function () {
        // Service logic
        // ...

        // Public API here
        return {
            get: function () {
                return user;
            }
        }

    });