  angular.module('StudyGroup')
  .controller('LoginCtrl',function($http,$scope,$location,$rootScope){

    $scope.login = function(){

      //var user = {}

      var args = {
        method: 'POST',
        url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/login',
        data: {
          "mail": $scope.userEmail,
          "pass": $scope.userPassword
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }

      console.log(args);


      $http(args)
      .success(function(data){
        if(data.usuarioConectado === "true"){
          console.log("Usuario correcto");
          $rootScope.currentUser = data.usuarioId ;
          $rootScope.currentSession = data.usuarioConectado ;

        }
        else{

          //Do somethig in the future
          console.log(data);
        }

      })
      .error(function(err){
        return err;
      })

    }

  });
