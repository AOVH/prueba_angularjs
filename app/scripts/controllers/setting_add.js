'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:SettingAddCtrl
 * @description
 * # SettingAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('SettingAddCtrl', function ($scope,$window,settingsservice) {

    $scope.setting ={};

  	var onError = function(data){  		
        swal("Error", "Ocurrió un error al guardar la configuración.", "warning");
  		 
      

    };

  	 var onSettingSave = function(data){
      $scope.saving = false;
      swal("Configuración Guardada","Bien Hecho. La configuración ha sido registrada", "success");
     	
    };

     $scope.SaveSetting = function(){
      $scope.saving = true;
      swal({
        title: "Favor de esperar",
        text: "La configuración se esta guardando. ",       
        showConfirmButton: false,
        animation: false
      });      
      $scope.setting.active=1;   
      settingsservice.saveSetting($scope.setting, onSettingSave, onError);
    };
    
    $scope.back = function(){
		  $window.location.href= "#/";
	 };
	
	  var onLoadSetting= function(data){  
      if(data=="null"){
         $scope.setting.tasa_financiamiento=""
         $scope.setting.porcentaje_enganche=""
         $scope.setting.plazo_maximo=""

      }else{
       $scope.setting=data
       $scope.setting.plazo_maximo=parseFloat($scope.setting.plazo_maximo)
       $scope.setting.porcentaje_enganche=parseFloat($scope.setting.porcentaje_enganche)
       $scope.setting.tasa_financiamiento=parseFloat($scope.setting.tasa_financiamiento)
      }   
	 	  
          
	 };

   settingsservice.getSettings(onLoadSetting, onError);
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
