'use strict';

describe('Service: salesservice', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var salesservice;
  beforeEach(inject(function (_salesservice_) {
    salesservice = _salesservice_;
  }));

  it('should do something', function () {
    expect(!!salesservice).toBe(true);
  });

});
