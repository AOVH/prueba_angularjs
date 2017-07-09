'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ClientAddCtrl
 * @description
 * # ClientAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ClientAddCtrl', function ($scope,$routeParams,$window,clientsservice) {
  	$scope.client = {};
  	

  	var onError = function(data){  		
        swal("Error", "Ocurrió un error al guardar al cliente.", "warning");
  		 
      

    };

  	 var onClientSave = function(data){
      $scope.saving = false;
      swal("Cliente Guardado","Bien Hecho. El cliente ha sido registrado correctamente","success");
      $scope.back();	
    };

     $scope.SaveClient = function(){
      $scope.saving = true;
      swal({
        title: "Favor de esperar",
        text: "El nuevo cliente esta siendo guardado",       
        showConfirmButton: false,
        animation: false
      });
      if($scope.first|| $scope.editar==0){$scope.client.id=0}
      $scope.client.active = 1;     
      clientsservice.saveClient($scope.client, onClientSave, onError);
    };
    
    $scope.back = function(){
		  $window.location.href= "#/catalogo/clientes";
	 };
	 var onLoadLastCliet= function(data){
    if(data=="null"){
      $scope.first=true;
      $scope.client.id= 1
    }
    else{
      $scope.client.id=data.id + 1
      $scope.first=false;    }
	 	
    $scope.editar=0
	 };
	  var onLoadCliet= function(data){
	 	$scope.client=data
    $scope.editar=1
	 };

    
    var client_id = $routeParams.client_id;
    	if(client_id){
    		$scope.client.id = client_id;
        clientsservice.getClient(client_id, onLoadCliet, onError);
        
    	}else{
    		
    		clientsservice.getLastClient(onLoadLastCliet,onError)
    		
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
