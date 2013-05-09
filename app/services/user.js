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
    rate: 90,
    interfaceLang: "en",
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