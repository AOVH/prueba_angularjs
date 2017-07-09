'use strict';

describe('Service: screensservice', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var screensservice;
  beforeEach(inject(function (_screensservice_) {
    screensservice = _screensservice_;
  }));

  it('should do something', function () {
    expect(!!screensservice).toBe(true);
  });

});
