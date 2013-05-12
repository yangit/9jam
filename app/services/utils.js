
angular.module('9jam')
    .factory('Utils', function () {
        var utils = {
            capitalize:function (string)
            {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

        };

        // Service logic
        // ...

        // Public API here
        return {
            get: function () {
                return utils;
            }
        }

    });