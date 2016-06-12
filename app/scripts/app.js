"use strict";

(function(){

    angular.module('Geo', ['uiGmapgoogle-maps','nemLogging'])
    .config(function (uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        //Google Maps API Key
          key: 'AIzaSyDsNe1s_Sw9AU1cCDT-_5R3YSwju3Hkc1A',
          v: '3.20',
          libraries: 'weather,geometry,visualization',
          language:"es"
      });
      console.log(uiGmapGoogleMapApiProvider);
});

})();


(function(){

    angular.module('StudyGroup', [
    'ngRoute','Geo'
    ])
    .config(function($routeProvider){

        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
          })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
          })
        .when('/edit_user', {
            templateUrl: 'views/components/modificarContrasenaUsuario.html',
            controller: 'ModificarContrasenaUsuarioCtrl'
          })
        .when('/user_profile', {
            templateUrl: 'views/components/usuarioPerfil.html',
            controller: 'UsuarioPerfilCtrl'
          })
        .when('/mapTest', {
            templateUrl: 'views/components/mapasTest.html',
            controller: 'MapasTestCtrl'
          })
        .when('/carreras', {
            templateUrl: 'views/components/carrerasAll.html',
            controller: 'CarrerasAllCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
