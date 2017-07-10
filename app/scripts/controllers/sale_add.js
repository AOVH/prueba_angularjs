'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:SaleAddCtrl
 * @description
 * # SaleAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('SaleAddCtrl', function ($scope,$window,salesservice,usablesservice,settingsservice,itemsservice) {
  	$scope.url_client = usablesservice.getBaseUrl() + 'client/search/';
  	$scope.url_item = usablesservice.getBaseUrl() + 'item/search/';
    $scope.sale={};
    $scope.articulos=[];
    $scope.enganche=0;
    $scope.bonificacion_enganche=0;
    $scope.total=0;
    $scope.total_importe=0; 
    $scope.precio_contado=0; 
    $scope.total_pagar_mes=0;   
    $scope.settings={};
    var current_index = 0;
    $scope.afterclick=true;
    $scope.guardar=false;
    


   
    

    var onError = function(data){  		
        swal("Error", "Ocurrió un error al guardar la venta.", "warning");
  		 
      

    };
     $scope.back = function(){
      $window.location.href= "#/catalogo/articulos";
   };

    var onErrorSettings = function(data){     
        swal("Error", "Ah Ocurrido un error", "warning");
       
      

    };
    $scope.index_radio=function(index){
      $scope.index_r= index;
    }
 
  	 var onSaleSave = function(data){
      $scope.saving = false;
      swal("Venta Guardada","Bien Hecho, Tu venta ha sido registrada correctamente","success");
      $scope.back();	
    };

     $scope.SaveSale = function(){
      if($scope.index_r!=null){
      $scope.saving = true;
      swal({
        title: "Favor de esperar",
        text: "La nueva venta esta siendo guardada",       
        showConfirmButton: false,
        animation: false
      });
      if($scope.first){$scope.sale.id=0}
        var hoy = new Date(); 
      $scope.sale.id_client=$scope.ClientSelect.id;
      $scope.sale.fecha_venta=hoy
      $scope.sale.estatus="Activa"
      $scope.sale.id_paid_systems=2
      $scope.sale.id_financing_types=1
      $scope.sale.id_financing_models=2
      $scope.sale.cantidad_pagos=$scope.numero_pagos[$scope.index_r].cantidad 
      $scope.sale.total_venta=$scope.numero_pagos[$scope.index_r].total 
      $scope.sale.pago_diferido=$scope.numero_pagos[$scope.index_r].abono 
      $scope.sale.articulos_vendidos=$scope.articulos;
      $scope.sale.active = 1;  

      salesservice.saveSale($scope.sale, onSaleSave, onError);
      }else{swal("Error", "Debe seleccionar un plazo para realizar el pago de su compra.", "warning");}
    };
    
    $scope.back = function(){
		  $window.location.href= "#/ventas";
	 };
	 var onLoadLastSale= function(data){
	 	if(data=="null"){
	 		$scope.first=true;
	 		$scope.sale.id= 1
	 	}
	 	else{
	 		$scope.sale.id=data.id + 1
	 		$scope.first=false;
	 	}
	 	$scope.editar=0 
	 	
	 		
	 	
	 	
	 };
   var onLoadItem= function(data){
    $scope.item=data
   
    
   };
	  var onLoadSales= function(data){
	 	$scope.sale=data
	 	
	 	$scope.editar=1
	 	
	 };
    var onLoadSettings= function(data){
      if(data=="null"){
         $scope.settings.tasa_financiamiento=0
          $scope.settings.plazo_maximo=0
           $scope.settings.porcentaje_enganche=0

      }else{
         $scope.settings=data 
      }
   
    
   };
 salesservice.getLastSale(onLoadLastSale,onError)
        settingsservice.getSettings(onLoadSettings,onErrorSettings) 
    $scope.onClientSelected= function(data){
        if(data){
            $scope.ClientSelect = data.originalObject;
            $scope.showrfc=true
          }else
          {$scope.showrfc=false}
    };
     $scope.onItemSelected= function(data){
        if(data)
            $scope.ItemSelect = data.originalObject;
          $scope.sum_cant=$scope.ItemSelect.existencia - 1
    }; 
    $scope.getTotal = function(index) { 
     
            $scope.sum_cant2=0 
            $scope.total=0  
            $scope.cantidad_vacia=false;           
            for (var i = 0; i <   $scope.articulos.length; i++) {              
                if ($scope.articulos[i].item_cantidad <1 ){$scope.articulos[i].item_cantidad=""}  
                if (index!=undefined){CantidadItemsChange($scope.articulos[index].id_item);
                   if ($scope.sum_cant2 > $scope.articulos[index].item_existencia){
                   swal("Error", "“El artículo seleccionado no cuenta con la existencia suficiente, favor de verifica.", "warning");
                   $scope.articulos[index].item_cantidad=1  ;
                }                   

                }        
               
                if($scope.articulos[i].item_cantidad==""){ $scope.total=0
                  $scope.cantidad_vacia=true;
                }else{$scope.total = $scope.total + ( parseFloat( $scope.articulos[i].item_cantidad) * parseFloat(  $scope.articulos[i].item_precio));}                
            }
            $scope.enganche=($scope.total / 100) * $scope.settings.porcentaje_enganche;
            $scope.bonificacion_enganche= $scope.enganche * (( $scope.settings.tasa_financiamiento * $scope.settings.plazo_maximo) / 100)
            $scope.total_importe= ($scope.total -  $scope.enganche -  $scope.bonificacion_enganche)         
            $scope.precio_contado= $scope.total_importe / (1 + (($scope.settings.tasa_financiamiento *$scope.settings.plazo_maximo) / 100))
            
        }  
         
    $scope.updateItems = function() {
            
                $scope.articulos.push($scope.articulo);           
           
            $('#form_add').modal('hide');
             $scope.getTotal()
        }
        $scope.deleteItem = function(index) {                                    
            $scope.articulos.splice(index, 1);
             $scope.getTotal()
        }
    $scope.AddItem=function(){
      if($scope.ClientSelect!=null){
      if($scope.ItemSelect!=null){
      if($scope.ItemSelect.existencia > 0){
        CantidadItems()
      if( $scope.sum_cant<$scope.ItemSelect.existencia){

      var hoy = new Date();   
                        
            $scope.articulo = {                               
                    id_client: $scope.ClientSelect.id,                    
                    id_item: $scope.ItemSelect.id,
                    item_descripcion: $scope.ItemSelect.descripcion+" "+$scope.ItemSelect.existencia+" "+$scope.ItemSelect.modelo,
                    item_modelo: $scope.ItemSelect.modelo,
                    item_precio: (parseFloat($scope.ItemSelect.precio) * (1 + ($scope.settings.tasa_financiamiento * $scope.settings.plazo_maximo ) / 100)),
                    item_cantidad:1,
                    item_existencia:$scope.ItemSelect.existencia,
                    id_financing_models: 0,
                    id_financing_types: 0,
                    id_paid_systems: 0,
                    cantidad_pagos: 0,
                    fecha_venta: hoy ,
                    estatus: "Estatus",
                    active:1              
                   
                    

                }
                 $scope.updateItems();
                 console.log($scope.articulos)
        }else{swal("Error", "El artículo seleccionado no cuenta con existencia, favor de verificar. ", "warning");}         
       }else{swal("Error", "El artículo seleccionado no cuenta con existencia, favor de verificar. ", "warning");}                
      }else{swal("Error", "Seleccione por lo menos un articulo", "warning");}          
      }else{swal("Error", "Seleccione al cliente.", "warning");}

    };
   
    		
        $scope.CalcularPorMes= function(text,meses){

          var resultado;
          switch(text) {
                case "abono":
                     resultado= $scope.precio_contado / meses
                    break;
                case "total":
                    resultado= $scope.precio_contado * ( 1 + ( $scope.settings.tasa_financiamiento * meses ) / 100)
                    break;
                  case "ahorro":
                     resultado= $scope.precio_contado * ( 1 + ($scope.settings.tasa_financiamiento * meses ) / 100)
                    resultado= $scope.total_importe - resultado
                    break;             
            }
            return resultado;
        
       };

       var AddTabla=function(){
        $scope.numero_pagos = [
      {id: '1',cantidad:3,nombre:'3 ABONOS',abono:$scope.CalcularPorMes("abono",3),total:$scope.CalcularPorMes("total",3),ahorro:$scope.CalcularPorMes("ahorro",3)}, 
      {id: '2',cantidad:6, nombre: '6 ABONOS',abono:$scope.CalcularPorMes("abono",6),total:$scope.CalcularPorMes("total",6),ahorro:$scope.CalcularPorMes("ahorro",6)},
      {id: '3',cantidad:9,nombre:'9 ABONOS',abono:$scope.CalcularPorMes("abono",9),total:$scope.CalcularPorMes("total",9),ahorro:$scope.CalcularPorMes("ahorro",9)},
      {id: '4',cantidad:12,nombre:'12 ABONOS',abono:$scope.CalcularPorMes("abono",12),total:$scope.CalcularPorMes("total",12),ahorro:$scope.CalcularPorMes("ahorro",12)} 
    ];
    console.log($scope.numero_pagos)
      }

    $scope.SeccionAbonos=function(){
    if($scope.ClientSelect!=null && $scope.ItemSelect!=null &&  $scope.cantidad_vacia!=true && $scope.total>0  ){
      $scope.afterclick=false;
      $scope.guardar=true;
      $scope.getTotal();
        AddTabla(); 

      }else{swal("Error", "Los datos ingresados no son correctos, favor de verificar", "warning");}          
    
   

    }

      var CantidadItems= function(){
        $scope.sum_cant=0
        for (var i = 0; i <   $scope.articulos.length; i++) {               
                
                if($scope.ItemSelect.id==$scope.articulos[i].id_item){
                $scope.sum_cant= $scope.sum_cant + $scope.articulos[i].item_cantidad
                }              
            }
           
    
   };
    var CantidadItemsChange= function(index){
        $scope.sum_cant2=0
        for (var i = 0; i <   $scope.articulos.length; i++) {               
                
                if(index==$scope.articulos[i].id_item){
                $scope.sum_cant2= $scope.sum_cant2 + $scope.articulos[i].item_cantidad
                }              
            }


           
    
   };

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
