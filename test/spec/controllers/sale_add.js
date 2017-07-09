'use strict';

describe('Controller: SaleAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var SaleAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaleAddCtrl = $controller('SaleAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SaleAddCtrl.awesomeThings.length).toBe(3);
  });
});
