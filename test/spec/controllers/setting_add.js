'use strict';

describe('Controller: SettingAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var SettingAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SettingAddCtrl = $controller('SettingAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SettingAddCtrl.awesomeThings.length).toBe(3);
  });
});
