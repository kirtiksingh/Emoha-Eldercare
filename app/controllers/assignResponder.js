 var google;

'use strict';
 
 (function () {
   var injectParams = ['$scope','$rootScope','$location','$filter', 'assignResponderService','emergencyCasesService'];
  var assignResponderController = function ($scope,$rootScope,$location,$filter,assignResponderService,emergencyCasesService) {
    
    $scope.viewdata = function (emg_id) {
        $rootScope.viewId = emg_id;
        emergencyCasesService.viewdata(emg_id).success(function (result) {  
          if (result) { 
            $rootScope.viewdataDetails = result;
            $rootScope.viewId = $rootScope.viewdataDetails[0].flag_monitoring;
          }
        });
      };
      $scope.getFlagValue = function(emg_id){
        $rootScope.emg = emg_id; 
        emergencyCasesService.getFlagValue($scope.emg).success(function (result) {
          if (result) {
            $scope.flag = result;
            $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
            // $scope.btnEnabler($rootScope.emg);  
          }  
        });
      };
      $scope.customerLocation = function(){
        $scope.emgvaluedata = $rootScope.emg; 
        assignResponderService.customerLocation($scope.emgvaluedata).success(function (result) {
          if (result) {
            $rootScope.customerlocationValue = new google.maps.LatLng(result['0'].emg_geolocation.split(',')[1], result['0'].emg_geolocation.split(',')[2]);;
            // $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
            $scope.loadMap();
          }  
        });
      };

      var estimatedTime;
      var maps;
      var estimatedKm;

       $scope.loadMap = function(){
         $scope.loadMap = $rootScope.emg;
         assignResponderService.loadMap($scope.loadMap).success(function (result) {
          if (result) {
            // $scope.flag = result;
            // $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
            // $scope.btnEnabler($rootScope.emg);  
            var lat=result['0'].latitude;
            var long=result['0'].longitude;
            const mapOptions = {
              center: new google.maps.LatLng(lat,long),
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
           maps= new google.maps.Map(document.getElementById('map'), mapOptions);
          }  
          $scope.startNavigation();
        });
       
      };

      $scope.startNavigation = function(){
        $scope.loadMap = $rootScope.emg;
        assignResponderService.loadMap($scope.loadMap).success(function (result) {
          if (result) {
            var locationCus=$rootScope.customerlocationValue;
            var updateLocation=new google.maps.LatLng(result['0'].latitude,result['0'].longitude)
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(maps);
   
           directionsService.route({
                   origin: updateLocation,
                   destination:  locationCus ,
                   travelMode: 'DRIVING',
                   drivingOptions: {
                       departureTime: new Date(Date.now()),
                       trafficModel: 'optimistic'
                   }
               },
               function (res, status) {
                 estimatedTime = null;
                    estimatedKm = null;
                    estimatedTime = res.routes['0'].legs['0'].duration.text;
                    estimatedKm = res.routes['0'].legs['0'].distance.text;
                   console.log(estimatedKm);
                   if (status === google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(res);
                        setTimeout(function(){ 
                          directionsDisplay.setMap(null);
                          $scope.startNavigation();
                        }, 20000);
                        
                   } else {
                       console.warn(status);
                   }
               })
          }
        });
       
          
      };
      // map = new google.maps.Map(document.getElementById('map'), {
      //   center: {lat: 28.4250, lng: 150.644},
      //   zoom: 17
      // });
      // infoWindow = new google.maps.InfoWindow;
    };

    assignResponderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('assignResponderController', assignResponderController)
  })();