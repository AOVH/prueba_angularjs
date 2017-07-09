'use strict';

/**
 * @ngdoc service
 * @name webApp.itemsservice
 * @description
 * # itemsservice
 * Service in the webApp.
 */
angular.module('webApp') 
  .service('itemsservice', function ($http,usablesservice) {
    // AngularJS will instantiate a singleton by calling "new" on this function.
    var baseUrl = usablesservice.getBaseUrl();

     this.getItems = function(callback, onError){
     
      var fullUrl = baseUrl+ "items";
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };
    this.getLastItem = function(callback, onError){
     
      var fullUrl = baseUrl+ "last_item";
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };
    this.getItem = function(item_id,callback, onError){
     
      var fullUrl = baseUrl+ "/catalogo/editar/item/"+item_id;
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError); 
    };

      this.saveItem = function(item, callback, onError){

        var fullUrl = baseUrl+"items";
        var data = {item: item};
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
