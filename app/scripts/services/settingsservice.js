'use strict';

/**
 * @ngdoc service
 * @name webApp.settingsservice
 * @description
 * # settingsservice
 * Service in the webApp.
 */
angular.module('webApp')
  .service('settingsservice', function ($http,usablesservice) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   
    var baseUrl = usablesservice.getBaseUrl();
    this.getSettings = function(callback, onError){
     
      var fullUrl = baseUrl+ "settings";
      var req = {
        method:'GET',
        url : fullUrl
      };
      $http(req).success(callback).error(onError);  
    };

      
    this.saveSetting = function(setting, callback, onError){

        var fullUrl = baseUrl+"settings";
        var data = {setting: setting};
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
 