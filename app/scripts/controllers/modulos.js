'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ModulesCtrl
 * @description
 * # ModulesCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ModulosCtrl', function ($scope,modulosservice) {
   
  	$scope.modulos = [];
    
     var onError = function(data){


    };
    

    var onModulosLoaded = function(data){

    	$scope.modulos = data;
    	
    };


    modulosservice.getModules(onModulosLoaded, onError);
  }); 
