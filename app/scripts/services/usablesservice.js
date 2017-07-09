'use strict';

/**
 * @ngdoc service
 * @name webApp.usablesservice
 * @description
 * # usablesservice
 * Service in the webApp.
 */
angular.module('webApp')
  .service('usablesservice', function usablesservice () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var baseUrl = 'http://localhost:3000/';

    this.getBaseUrl = function(){

            return baseUrl;

        };
  });
