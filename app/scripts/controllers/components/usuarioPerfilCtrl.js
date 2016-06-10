(function(){
    angular.module('StudyGroup')
    .controller('UsuarioPerfilCtrl', function($scope,$rootScope,$http){

      var args = {
        method: 'GET',
        url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/'+$rootScope.currentUser
      }

      console.log(isNaN($rootScope.currentUser));

      if( !isNaN($rootScope.currentUser) ){

        $http(args)
        .success(function(data){
          console.log(data);
          $scope.userData = data;

        })
        .error(function(err){
          return err;
        })
      } //--->End If

    });

})();
