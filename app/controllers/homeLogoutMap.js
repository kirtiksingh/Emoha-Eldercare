/**
 * Created by root on 18/4/19.
 */
(function () {
    var injectParams = ['$scope',  '$rootScope', '$window','$filter', '$location','$http','homeLogoutMapService','sensorConfigService'];
    var homeLogoutMapController = function ($scope, $rootScope, $window, $filter,$location,$http,homeLogoutMapService,sensorConfigService) {
      
      $scope.show = false;

      $scope.on = function(){
        $scope.show = true;
      }
   
      $scope.off = function(){
        $scope.show = false;
      }
      $scope.showButton = function(){
        return $scope.show;
      }
        $scope.selectedRoomType = {};

        $scope.roomtype = 
        [
            {
            "selected":false,
            "name":"Bedroom",
           },
          {
            "selected":false,
            "name":"Drawing Room",
           },
           {
            "selected":false,
            "name":"Toilet",
           },
           {
            "selected":false,
            "name":"Kitchen",
           },  
          ];
        $scope.selectedRoomType   =   $scope.roomtype[0]; 

         $rootScope.custmerDetails = function () {
   
      $scope.customerDetailsdata = [];
      $rootScope.customerDetails = {};
      sensorConfigService.custmerDetails().success(function (result) {
       
        if (result) {
         
          $rootScope.customerDetails = result;
         
          angular.forEach($rootScope.customerDetails, function (element) {
          //  alert(element)
           $rootScope.customerDetailsvalue = element;
           $rootScope.custIdValue = $rootScope.customerDetailsvalue.cust_id;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    $scope.customerDataIdValue = function(cust_id){
       $rootScope.custData = cust_id;
    }
    $scope.getHomeValue = function (){
        $scope.valueId =  $rootScope.custData;
        $scope.valueDetail = $rootScope.customerDetails;
        // angular.forEach($scope.valueDetail, function (element) {
        //     $scope.customerDetailValue = element;
        // if($scope.valueId == $scope.customerDetailValue.cust_id){
        //     $scope.custValue = $scope.valueId;
        // }
        // })

    }
        $scope.addRoomValue = {
            cust_id:"",
            room_type:"",
            room_name:""
            }
        $scope.addRoom = function () {
            $scope.addRoomData = {};
            $scope.addRoomValue.cust_id  = $scope.custData;
            $scope.cust_id = $scope.addRoomValue.cust_id;
            $scope.addRoomValue.room_type = $scope.selectedRoomType.name;
            $scope.room_type = $scope.addRoomValue.room_type;
            $scope.room_name = $scope.addRoomValue.room_name;
            homeLogoutMapService.addRoom($scope.cust_id,$scope.room_type,$scope.room_name).success(function (result) {  
              if (result) {
                $scope.addRoomData = result;
                // window.location = '/homeLogoutMap/' ;
                alert("Add Room Successfully");
                $scope.gethomeLogoutMap();
                angular.forEach($scope.addRoomData, function (element) {
                    $scope.addRoomDataValue = element;
                })
              }
            });
          };
          $scope.customerIdData = function(){
            $rootScope.getCustomerId = $scope.customerId.cust_id;
            $scope.gethomeLogoutMap();
          }
          $scope.gethomeLogoutMap = function () {
            $rootScope.gethomeLogoutMapData = {};
            $scope.CustomerIdValue = $rootScope.getCustomerId;
            homeLogoutMapService.gethomeLogoutMap($scope.CustomerIdValue).success(function (result) {  
              if (result) {
                $rootScope.gethomeLogoutMapData = result;
                // window.location = '/homeLogoutMap/' ;
                // angular.forEach($scope.addRoomData, function (element) {
                //     $scope.addRoomDataValue = element;
                // })
              }
            });
          };
          $scope.removehomeMap = function (id) {
            // $scope.removehomeMapData = {};
            $scope.id = id;
            homeLogoutMapService.removehomeMap($scope.id).success(function (result) {  
              if (result == "success") {
                // window.location = '/homeLogoutMap/' ;
                alert("Remove Successfully");
                $scope.gethomeLogoutMap();
              }
            });
          };
          $scope.edithomeMap = function (id,cust_id,room_type,room_name) {
            $rootScope.idvalue = id ; 
            $rootScope.custiddata = cust_id;
            $rootScope.room_type = room_type;
            $rootScope.room_name = room_name;
           
          };
          $scope.getEditHomeMap =function (){
            $rootScope.CustomerId = $rootScope.custiddata;
            $scope.cust_room_type = $rootScope.room_type;
            $scope.cust_room_name = $rootScope.room_name;
           
          }
           $scope.savehomeMap = function () {   
             $scope.id = $rootScope.idvalue ; 
            $scope.cust_id =   $rootScope.CustomerId;
            $scope.cust_room_type = $scope.room_type;
            $scope.cust_room_name = $scope.room_name;
            homeLogoutMapService.savehomeMap($scope.id,$scope.cust_id,$scope.cust_room_type,$scope.cust_room_name).success(function (result) {  
                        if (result) {
                          // window.location = '/homeLogoutMap/' ;
                          alert("Update data Successfully");
                          $scope.gethomeLogoutMap();
                       
                        }
                      });
            // $scope.saveHome = $rootScope.gethomeLogoutMapData;
            //     angular.forEach($scope.saveHome, function (element) {
            //         $scope.saveHomeValue = element;
            //     if($scope.cust_id == $scope.saveHomeValue.cust_id){
            //           $scope.cust_room_type =   $scope.room_type;
            //           $scope.cust_room_name =   $scope.room_name;
            //           homeLogoutMapService.savehomeMap($scope.cust_id,$scope.room_type,$scope.room_name).success(function (result) {  
            //             if (result) {
            //               window.location = '/homeLogoutMap/' ;
            //               $scope.gethomeLogoutMap();
                       
            //             }
            //           });
            //            }
            //     })

          };
    };
    homeLogoutMapController.$inject = injectParams;
    angular.module('seniorApp').controller('homeLogoutMapController', homeLogoutMapController);
  }());
  