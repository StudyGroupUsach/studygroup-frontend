"use strict";

(function(){
    angular.module('StudyGroup')
    .controller('RegisterCtrl', function($scope,$http){

      var args = {
        method: 'GET',
        url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/gestion_carreras'
      }

      $http(args)
      .success(function(data){
        $scope.carreras = data;
        console.log(data);

      })

      .error(function(err){
        return err;
      })

      $scope.registrar = function(){

        var args = {
          method: 'POST',
          url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios',
          data: {
            "apellidos": $scope.userSurname,
            "nombre": $scope.userName,
            "mail": $scope.userEmail,
            "numeroMovil":$scope.userPhone,
            "pass": $scope.userPassword,
            "descripcion": "something...",
            "carrera": {
                            "nombreCarrera": $scope.userCarrera.nombreCarrera,
                            "carreraId": $scope.userCarrera.carreraId
                        }
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }

        console.log(args);

        if( $scope.userEmail === $scope.userEmail2 ){
          console.log("Emails --> Equals");

          if($scope.userPassword === $scope.userPassword2){
            console.log("Password --> Equals");

            $http(args)
            .success(function(data){
              if(data.usuarioAgregado === true){
                  console.log("Se ha creado el usuario...");
                  $location.path("/login");
              }
              else{

                console.log(data);
              }

            })
            .error(function(err){
              return err;
            })


          }

        }


      }


    })
})();
