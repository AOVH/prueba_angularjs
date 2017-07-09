'use strict';

describe('Controller: ModulosCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var ModulosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulosCtrl = $controller('ModulosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModulosCtrl.awesomeThings.length).toBe(3);
  });
});
