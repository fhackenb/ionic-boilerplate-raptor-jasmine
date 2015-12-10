describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        // mock $ionicPopup
        ionicModalMock = jasmine.createSpyObj('$ionicPopup spy', ['hide', 'show', 'fromTemplateUrl']);
        scope = $rootScope.$new();
        $controller('LoginController', {$scope: scope, $ionicModal: ionicModalMock});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });
});