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
        return function (condition, i18n) {
            if (condition) {
                return i18n.yes;
            } else {
                return i18n.no;
            }
        }
    })
    .filter('i18n',function (User) {
        var user = User.get();
        return function (hash) {
            if (user.interfaceLanguage) {
                return hash.en;
            } else {
                return hash.my;
            }
        }
    })
    .filter('showLang',function () {
        return function (value) {
            var icon = "";
            switch (value) {
                case 0:
                    break;
                case 1:
                    icon = "icon-star-empty";
                    break;
                case 2:
                    icon = "icon-star-half-empty";
                    break;
                case 3:
                    icon = "icon-star";
                    break;
            }
            return icon;
        }
    })
    .filter('capitalize',function (Utils) {
        var utils = Utils.get();
        return function (string) {
            return utils.capitalize(string);
        }
    }).filter('searchLancer', function () {
        return function (lancers, filter) {
            return lancers.filter(function (l) {
                var result = [];
                if (filter.phone) {
                    result.push((l.phone.indexOf(filter.phone) >= 0));
                }
                if (filter.ageMin&&filter.ageMax) {
                    result.push((l.age>=filter.ageMin&&l.age<=filter.ageMax));
                }
                if (filter.rateMin&&filter.rateMax) {
                    result.push((l.rate>=filter.rateMin&&l.rate<=filter.rateMax));
                }
                if (filter.education) {
                    if (filter.educationStrict) {
                        result.push((l.education == filter.education));
                    } else {
                        result.push((l.education >= filter.education));
                    }
                }
                if (filter.location) {
                    result.push((l.location===filter.location));
                }

                //check if all result's checks resolve to true
                return result.reduce(function (sum, item) {
                    return (sum == true && item == true)
                }, true);
            });
        }
    }).filter('education', function (i18n) {
        var __ = i18n.get();
        return function (education) {
            var e = "";
            switch (education) {
                case 0:
                    e=__.none;
                    break;
                case 1:
                    e=__.school;
                    break;
                case 2:
                    e=__.bachelor;
                    break;
                case 3:
                    e=__.masters;
                    break;
            }
            return e;
        }
    });