'use strict';

describe('sofa.goUpButton', function () {

    var element, $compile, $rootScope, navigationService;

    beforeEach(module('sofa.goUpButton'));

    beforeEach(inject(function (_$compile_, _$rootScope_, $injector) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        navigationService = $injector.get('navigationService');
    }));

    it('should transclude the content', function () {
        element = $compile('<sofa-go-up-button>Hello</sofa-go-up-button>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('Hello');
    });

    it('should call the goUp() method', function () {
        spyOn(navigationService, 'goUp');
        element = $compile('<sofa-go-up-button></sofa-go-up-button>')($rootScope);
        $rootScope.$digest();
        element.triggerHandler('click');
        expect(navigationService.goUp).toHaveBeenCalled();
    });

});
