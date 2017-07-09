'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ItemsCtrl
 * @description
 * # ItemsCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ItemsCtrl', function ($scope,$window,itemsservice) {
   $scope.items = [];

    $scope.goToAdd =function(){
      $window.location.href= "#/agregar/articulo";
    };

    $scope.editItem =function(item_id){
      $window.location.href= "#/catalogo/editar/articulo/"+item_id;
    };
    

     var onError = function(data){ 


    };
    

    var onItemsLoaded = function(data){

    	$scope.items = data;
    	
    };


    itemsservice.getItems(onItemsLoaded, onError);
  });
