angular
    .module('sdk.filter.stringReplace', [])
    .filter('stringReplace', ['$exceptionHandler', function ($exceptionHandler) {

        'use strict';
        // Takes n arguments after "template". Either an array or arguments are turned into one
        return function (template) {
            var values = [];

            if (arguments.length < 2) {
                return template;
            } else if (arguments.length > 2) {
                // Turn all arguments except the first one into an array
                values = Array.prototype.slice.call(arguments, 1);
            } else {
                var arg = arguments[1];

                if (angular.isArray(arg)) {
                    values = arg;
                } else if (angular.isString(arg) || angular.isNumber(arg)) {
                    values[0] = arg;
                } else {
                    return template;
                }
            }

            var parse = function (template, values) {
                var regEx = /%s/,
                    hits  = template.match(/%s/g),
                    i     = 0;

                try {
                    if (hits && hits.length) {
                        for (; i < hits.length + 1; i++) {
                            template = template.replace(regEx, values[i]);
                        }
                    } else {
                        throw new Error('Template "' + template + '" doesn\'t contain any placeholder strings (%s).');
                    }
                } catch(e) {
                    $exceptionHandler(e);
                }

                return template;
            };

            return parse(template, values);
        };
    }]);
