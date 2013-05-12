var defaults = {
    domain: "9jam.my",
    locations: ['Kuala-Lumpur','Pinang'],
    user: {
        publish:false,
        age: 0,
        lang: {en: 0, my: 0, tm: 0, mn: 0},
        phone:"",
        name: {
            first: "",
            middle: "",
            last: "",
            shy: false
        },
        education: {stm: false, bachelor: false},
        location: "",
        rate: 0,
        interfaceLanguage: false,
        auth: {
            in:false,
            fb:{},
            local:{}
        }
    }
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