'use strict';

/**
 * @ngdoc service
 * @name webApp.modulesservice
 * @description
 * # modulesservice
 * Service in the webApp.
 */
angular.module('webApp')
  .service('modulosservice', function (usablesservice, $http) { 
    // AngularJS will instantiate a singleton by calling "new" on this function
     var baseUrl = usablesservice.getBaseUrl();

     this.getModules = function(callback, onError){
     
      var fullUrl = baseUrl+ "modulos";
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };

  }); 
