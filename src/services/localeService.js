angular.module('sdk.services.localeService', []);

angular
    .module('sdk.services.localeService')
    .factory('localeService', ['$window', '$exceptionHandler', function ($window, $exceptionHandler) {

        'use strict';

        var self = {};

        self.translationData = {};

        // Call this in your app's run phase to use your global translation object
        self.setTranslationData = function (obj) {
            self.translationData = obj;
        };

        self.getTranslation = function (path, failSilent) {

            if (!path) {
                return self.translationData;
            }

            var objects = path.split('.');
            var locale  = '';
            var length  = objects.length;
            var ln      = self.translationData;

            objects.every(function (el, i) {
                try {
                    if (!ln[el]) {
                        if (!failSilent) {
                            throw new Error('No translation found for: "' + el + '"');
                        }
                    } else {
                        if (i + 1 !== length) {
                            ln = ln[el];
                            return true;
                        } else {
                            locale = ln[el];
                            return false;
                        }
                    }
                } catch (e) {
                    $exceptionHandler(e);
                }
            });

            return locale;
        };

        return self;
    }]);
