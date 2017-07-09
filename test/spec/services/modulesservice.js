'use strict';

describe('Service: modulosservice', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var modulosservice;
  beforeEach(inject(function (_modulesservice_) {
    modulosservice = _modulesservice_;
  }));

  it('should do something', function () {
    expect(!!modulosservice).toBe(true);
  });

});
