(function(){
    angular.module('StudyGroup')
    .controller('UsuarioPreferenciasCtrls', function($scope,$rootScope,$http){

      var args = {
        method: 'GET',
        url: 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/gestion_relacion_usuarios/'+$rootScope.currentUser
      }

      if( !isNaN($rootScope.currentUser) ){

        $http(args)
        .success(function(data){
          console.log(data);
          $scope.userRamos = data;

        })
        .error(function(err){
          return err;
        })
      } //--->End If


    });
})();
