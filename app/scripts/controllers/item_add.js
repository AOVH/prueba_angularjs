'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ItemAddCtrl
 * @description
 * # ItemAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ItemAddCtrl', function ($scope,$routeParams,$window,itemsservice) {
    $scope.item = {};
    $scope.item.editar;
  	

  	var onError = function(data){  		
        swal("Error", "Ocurrió un error al guardar el articulo.", "warning");
  		 
      

    };

  	 var onItemSave = function(data){
      $scope.saving = false;
      swal("Articulo Guardado","Bien Hecho. El Articulo ha sido registrado correctamente","success");
      $scope.back();	
    };

     $scope.SaveItem = function(){
      $scope.saving = true;
      swal({
        title: "Favor de esperar",
        text: "El nuevo articulo esta siendo guardado",       
        showConfirmButton: false,
        animation: false
      });
      if($scope.first || $scope.editar==0){$scope.item.id=0}
      $scope.item.active = 1;            
      itemsservice.saveItem($scope.item, onItemSave, onError);
    };
    
    $scope.back = function(){
		  $window.location.href= "#/catalogo/articulos";
	 };
	 var onLoadLastItem= function(data){
	 	if(data=="null"){
	 		$scope.first=true;
	 		$scope.item.id= 1
	 	}
	 	else{
	 		$scope.item.id=data.id + 1
	 		$scope.first=false;
	 	}
	 	$scope.editar=0 
	 	
	 		
	 	
	 	
	 };
	  var onLoadItem= function(data){
	 	$scope.item=data
	 	$scope.item.precio=parseFloat(data.precio)
	 	$scope.editar=1
	 	
	 };

    
    var item_id = $routeParams.item_id;
    	if(item_id){
    		$scope.item.id = item_id;
        itemsservice.getItem(item_id, onLoadItem, onError);
        
    	}else{
    		
    		itemsservice.getLastItem(onLoadLastItem,onError)
    		
    	}
      $scope.Cancelar=function(){  
              
      
            swal({
        title: '¿Seguro que deseas salir?',
        text: "Perdera su configuración",
        type: 'warning',
        showCancelButton: true,  
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'       
      }).then(function () {  
        $scope.back();
      }, function (dismiss) { 
               
        if (dismiss === 'cancel') {   
        }
      })
              
     }
  });
