var user = {
    publish:false,
    age: 29,
    lang: {en: 3, my: 1, tm: 0, mn: 0},
    phone:"0166521254",
    name: {
        first: "Yan",
        middle: "L",
        last: "Tyukhtyaev",
        shy: true
    },
    education: {stm: true, bachelor: true},
    location: "Kuala-Lumpur",
    rate: 90,
    l: true,
    auth: {
        in:false,
        fb:{},
        local:{}
    }
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