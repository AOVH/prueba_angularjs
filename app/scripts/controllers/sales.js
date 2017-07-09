'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:SalesCtrl
 * @description
 * # SalesCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('SalesCtrl', function ($scope,$window,salesservice) {
   $scope.sales = [];

    $scope.goToAdd =function(){
      $window.location.href= "#/agregar/venta";
    };

   
    

     var onError = function(data){ 


    };
    

    var onSalesLoaded = function(data){ 

    	$scope.sales = data;
    	
    };


    salesservice.getSales(onSalesLoaded, onError);
  });
