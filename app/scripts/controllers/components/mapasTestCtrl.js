(function(){
    angular.module('StudyGroup')
    .controller('MapasTestCtrl', function($scope, uiGmapGoogleMapApi ){

      var areaLat      = 44.2126995,
          areaLng      = -100.2471641,
          areaZoom     = 3;

      uiGmapGoogleMapApi.then(function(maps) {
        $scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
        $scope.options = { scrollwheel: false };

        console.log(maps);
        //$scope.map.control.getGMap().fitBounds(bounds);

      });

    });
})();
