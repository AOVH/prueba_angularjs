'use strict';

describe('Service: itemsservice', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var itemsservice;
  beforeEach(inject(function (_itemsservice_) {
    itemsservice = _itemsservice_;
  }));

  it('should do something', function () {
    expect(!!itemsservice).toBe(true);
  });

});
