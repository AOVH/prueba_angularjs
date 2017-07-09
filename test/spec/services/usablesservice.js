'use strict';

describe('Service: usablesservice', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var usablesservice;
  beforeEach(inject(function (_usablesservice_) {
    usablesservice = _usablesservice_;
  }));

  it('should do something', function () {
    expect(!!usablesservice).toBe(true);
  });

});
