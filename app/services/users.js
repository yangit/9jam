users = {}
angular.module('9jam')
    .factory('Users', function () {
        // Service logic
        // ...

        // Public API here
        return {
            get: function () {
                return users;
            }
        }

    });