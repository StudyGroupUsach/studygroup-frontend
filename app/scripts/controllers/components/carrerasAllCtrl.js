(function(){
    angular.module('StudyGroup')
    .controller('CarrerasAllCtrl', function($scope,$http){

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

    });
})();
