angular.module('9jam')
    .factory('Utils', function () {
        var utils = {
            //capitalize word.
            capitalize: function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            //pick random int from range
            randRange: function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            //pick random element of array
            rand: function (array) {
                return array[Math.floor(Math.random() * array.length)];
            }


        };

        // Public API here
        return {
            get: function () {
                return utils;
            }
        }

    });