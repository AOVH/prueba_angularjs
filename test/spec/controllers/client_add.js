'use strict';

describe('Controller: ClientAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var ClientAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientAddCtrl = $controller('ClientAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientAddCtrl.awesomeThings.length).toBe(3);
  });
});
