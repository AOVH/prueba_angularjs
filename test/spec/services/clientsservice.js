'use strict';

describe('Service: clientsservice', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var clientsservice;
  beforeEach(inject(function (_clientsservice_) {
    clientsservice = _clientsservice_;
  }));

  it('should do something', function () {
    expect(!!clientsservice).toBe(true);
  });

});
