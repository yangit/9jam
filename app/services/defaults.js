var defaults = {
    domain: "9jam.my",
    locations: ['Kuala-Lumpur','Pinang']
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