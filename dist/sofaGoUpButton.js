/**
 * angular-sofa-go-up-button - v0.1.0 - Thu Feb 19 2015 15:25:18 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa-go-up-button.tpl.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('sofa-go-up-button.tpl.html',
    '<button class="sofa-go-up-button" ng-click="goUp()" ng-transclude></button>\n' +
    '');
}]);

angular.module('sofa.goUpButton', [
        'sofa.navigationService',
        'sofa-go-up-button.tpl.html'
    ])
    .directive('sofaGoUpButton', ["navigationService", function(navigationService) {
        'use strict';

        return {
            restrict: 'EA',
            templateUrl: 'sofa-go-up-button.tpl.html',
            scope: {},
            replace: true,
            transclude: true,
            link: function($scope) {
                $scope.goUp = function() {
                    navigationService.goUp();
                };
            }
        };
    }]);
}(angular));
