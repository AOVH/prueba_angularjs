'use strict';

describe('Controller: ScreensCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var ScreensCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreensCtrl = $controller('ScreensCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScreensCtrl.awesomeThings.length).toBe(3);
  });
});
