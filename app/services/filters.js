angular.module('9jam')
    .filter('username', function () {
        return function (user) {
            var capitalise = function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
            var out = JSON.parse(JSON.stringify(user.name));
            if (out.shy) {
                if (out.middle.length) {
                    out.middle = out.middle.charAt(0) + '.';
                }
                if (out.last.length) {
                    out.last = out.last.charAt(0) + '.';
                }
            }

            return capitalise(out.first) + " " + capitalise(out.middle) + " " + capitalise(out.last);
        }
    })
    .filter('yesNo', function () {
        return function (condition) {
            if (condition) {
                return "Yes";
            } else {
                return "No";
            }
        }
    });