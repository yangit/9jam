user = {
    age: 29,
    lang: {en: 3, my: 1, tm: 0, mn: 0},
    phone:"+60166521254",
    name: {
        first: "Yan",
        middle: "L",
        last: "Tyukhtyaev",
        shy: true
    },
    education: {stm: true, bachelor: true},
    area: "Kuala-Lumpur",
    interface: "en",
    rate: 90
};

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