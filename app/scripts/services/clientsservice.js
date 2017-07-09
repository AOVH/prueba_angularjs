'use strict';

/**
 * @ngdoc service
 * @name webApp.clientsservice
 * @description
 * # clientsservice
 * Service in the webApp.
 */
angular.module('webApp')
  .service('clientsservice', function ($http,usablesservice) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var baseUrl = usablesservice.getBaseUrl();

     this.getClients = function(callback, onError){
     
      var fullUrl = baseUrl+ "clients";
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };
    this.getLastClient = function(callback, onError){
     
      var fullUrl = baseUrl+ "last_client";
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };
    this.getClient = function(client_id,callback, onError){
     
      var fullUrl = baseUrl+ "/catalogo/editar/cliente/"+client_id;
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };

      this.saveClient = function(client, callback, onError){

        var fullUrl = baseUrl+"clients";
        var data = {client: client};
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
