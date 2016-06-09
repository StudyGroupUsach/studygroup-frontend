(function(){

    angular.module('StudyGroup', [
    'ngRoute'
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
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
