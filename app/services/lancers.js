var lancers = [];
for (i = 0; i < 15; i++) {
    lancers.push({name: "LanCer "+i,phone:(Math.random()*1000000000|0).toString()});
}

angular.module('9jam')
    .factory('Lancers', function () {
        // Service logic
        // ...

        // Public API here
        return {
            get: function () {
                return lancers;
            }
        }

    });