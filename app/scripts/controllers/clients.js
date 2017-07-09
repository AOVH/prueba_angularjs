'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ClientsCtrl', function ($scope,$window,clientsservice) {


  	$scope.clientes = [];

    $scope.goToAdd =function(){ 
      $window.location.href= "#/agregar/cliente";
    };

    $scope.editClient =function(client_id){
      $window.location.href= "#/catalogo/editar/cliente/"+client_id;
    };
    

     var onError = function(data){ 


    };
    

    var onClientsLoaded = function(data){

    	$scope.clientes = data;
    	
    };


    clientsservice.getClients(onClientsLoaded, onError);
   
  });
