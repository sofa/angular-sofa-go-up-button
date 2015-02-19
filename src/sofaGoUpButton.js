angular.module('sofa.goUpButton', [
        'sofa.navigationService',
        'sofa-go-up-button.tpl.html'
    ])
    .directive('sofaGoUpButton', function(navigationService) {
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
    });
