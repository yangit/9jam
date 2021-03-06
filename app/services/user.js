angular.module('9jam')
    .factory('User', function () {
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
            education: 3,
            location: "Kuala-Lumpur",
            rate: 90,
            interfaceLanguage: true,
            skills: {
                heavy:false,
                promo:true,
                translation:true,
                design:true,
                coding:true
            },
            auth: {
                in:false,
                fb:{},
                local:{}
            }
        };

        // Public API here
        return {
            get: function () {
                return user;
            }
        }

    });