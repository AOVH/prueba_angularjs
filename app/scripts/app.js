'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngMask',
    'angucomplete-alt',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
     $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = {Accept: 'application/json, text/plain, */*'};
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/json;charset=utf-8'};
    $routeProvider
     .when('/', {
        templateUrl: 'views/main.html',  
        controller: 'MainCtrl'
      })
       .when('/catalogo/clientes', {
        templateUrl: 'views/clients.html',  
        controller: 'ClientsCtrl' 
      })
        .when('/agregar/cliente', {
        templateUrl: 'views/client_add.html',  
        controller: 'ClientAddCtrl' 
      })
        .when('/catalogo/editar/cliente/:client_id', {
        templateUrl: 'views/client_add.html',  
        controller: 'ClientAddCtrl' 
      })
         .when('/catalogo/articulos', {
        templateUrl: 'views/items.html',  
        controller: 'ItemsCtrl' 
      })
        .when('/agregar/articulo', {
        templateUrl: 'views/item_add.html',  
        controller: 'ItemAddCtrl' 
      })
        .when('/catalogo/editar/articulo/:item_id', {
        templateUrl: 'views/item_add.html',  
        controller: 'ItemAddCtrl' 
      })
     .when('/configuracion', {
        templateUrl: 'views/setting_add.html',  
        controller: 'SettingAddCtrl' 
      })
     .when('/ventas', {
        templateUrl: 'views/sales.html',  
        controller: 'SalesCtrl'  
      })
     .when('/agregar/venta', {
        templateUrl: 'views/sale_add.html',  
        controller: 'SaleAddCtrl' 
      })
     
      .otherwise({
        redirectTo: '/'
      });
  });
