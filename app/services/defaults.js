defaults = {
    domain: "9jam.my"
};

angular.module('9jam')
    .factory('Defaults', function () {
        // Service logic
        // ...

        // Public API here
        return {
            get: function () {
                return defaults;
            }
        }

    });