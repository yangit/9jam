angular.module('9jam')
    .filter('username', function (Utils) {
        //show username from user object. Takes into consideration "shy" option and capitalizes names.
        var utils = Utils.get();
        return function (user) {
            //hack to quickly get properties values, not object reference.
            var out = JSON.parse(JSON.stringify(user.name));
            if (out.shy) {
                if (out.middle.length) {
                    out.middle = out.middle.charAt(0) + '.';
                }
                if (out.last.length) {
                    out.last = out.last.charAt(0) + '.';
                }
            }
            return utils.capitalize(out.first) + " " + utils.capitalize(out.middle) + " " + utils.capitalize(out.last);
        }
    })
    .filter('yesNo', function () {
        //takes boolean input and produces localised Yes\No text. Useful for buttons.
        return function (condition, i18n) {
            if (condition) {
                return i18n.yes;
            } else {
                return i18n.no;
            }
        }
    })
    .filter('i18n',function (User) {
        //returns hash according to user language settings. There are only 2 languages planned for this website so boolean is fine.
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
        //filter to show "star" icon based on how skilled user is. The more skilled he is the more filled-up icon we use.
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
        //capitalize words.
        var utils = Utils.get();
        return function (string) {
            return utils.capitalize(string);
        }
    }).filter('searchLancer', function () {
        //search for free[lancer]. Apply series of checks and only proceed if all of them resolve to true.
        //having an array of check results helps with debug.
        return function (lancers, filter) {
            return lancers.filter(function (l) {
                var result = [];
                if (filter.phone) {
                    result.push((l.phone.indexOf(filter.phone) >= 0));
                }
                if (filter.ageMax) {
                    result.push((l.age>=filter.ageMin&&l.age<=filter.ageMax));
                }
                if (filter.rateMax) {
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
            }).slice(0,100); // return only first 100 results. Should be sorted before slicing though. Anyhow this piece will be rewritten on server with mongo.
        }
    }).filter('education', function (i18n) {
        // transpose education level from Int to localised word.
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
    }).filter('ago', function () {
        //apply "five minutes ago" filter to date objects.
        return function (date) {
            return moment(date).fromNow();
        }
    });