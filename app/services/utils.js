angular.module('9jam')
    .factory('Utils', function () {
        var utils = {
            capitalize:function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            randRange:function (min,max) {return Math.floor(Math.random() * (max - min + 1)) + min;}

        };

        // Public API here
        return {
            get: function () {
                return utils;
            }
        }

    });