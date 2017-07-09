'use strict';

/**
 * @ngdoc service
 * @name webApp.salesservice
 * @description
 * # salesservice
 * Service in the webApp.
 */
angular.module('webApp')
  .service('salesservice', function ($http,usablesservice) {
    // AngularJS will instantiate a singleton by calling "new" on this function
     var baseUrl = usablesservice.getBaseUrl();

     

     this.getSales = function(callback, onError){
     
      var fullUrl = baseUrl+ "sales";
      var req = {
        method:'GET',
        url : fullUrl
      }; 
      $http(req).success(callback).error(onError); 
    };
    this.getLastSale = function(callback, onError){
     
      var fullUrl = baseUrl+ "last_sale";
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };
   

      this.saveSale = function(sale, callback, onError){

        var fullUrl = baseUrl+"sales";
        var data = {sale: sale};
        console.log(data);
        var asJson = angular.toJson(data);
        var req = {
             method: 'POST',
             url: fullUrl,
             headers: {
               'Content-Type': 'application/json'
             },
             data: asJson
        };
        $http(req).success(callback).error(onError);
    };
  });
 