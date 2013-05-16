//declare default (new) user object and some other defaults in the future.

angular.module('9jam')
    .factory('Defaults', function () {
        var defaults = {
            searchLancer: {
                education: 0,
                educationStrict: true,
                ageMax:100,
                ageMin:0,
                rateMax:100,
                rateMin:0
            },
            domain: "9jam.my",
            locations: ['Kuala-Lumpur', 'Pinang'],
            user: {
                lastSeen: null,
                publish: false,
                age: 0,
                lang: {en: 0, my: 0, tm: 0, mn: 0},
                phone: "",
                name: {
                    first: "",
                    middle: "",
                    last: "",
                    shy: false
                },
                education: 0,
                location: "",
                rate: 0,
                interfaceLanguage: false,
                auth: {
                    in: false,
                    fb: {},
                    local: {}
                }
            }
        };
        // Public API here
        return {
            get: function () {
                return defaults;
            }
        }

    });