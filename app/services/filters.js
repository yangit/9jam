angular.module('9jam').
    filter('username', function () {
        return function (user) {
            var capitalise = function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
            var name = user.name;
            var out = JSON.parse(JSON.stringify(user.name));
            if (out.shy) {
                out.middle = out.middle.charAt(0) + '.';
                out.last = out.last.charAt(0) + '.';
            }

            return capitalise(out.first) + " " + capitalise(out.middle) + " " + capitalise(out.last);
        }
    });