'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var regionManagerDetailController = function ($scope,$rootScope,$location) {


//     $scope.clicked1 = function(){
//       alert("Successfully data Send");
//   }
  
  
  // $scope.customerId = $rootScope.customerIdValue ;
 
  $scope.regionvalue = [{
    value:"",
  }];
  //  $scope.custvalue.value =   $rootScope.customerDetails ; 
  $scope.regionIdData = function(){
    $scope.regionId = $rootScope.regionIdValue ;
    $scope.regionvalue.value =   $rootScope.regionManagerDetails ;

    angular.forEach($scope.regionvalue.value, function (element) {
      $scope.regionValue = element;
        if( $scope.regionId == $scope.regionValue.rm_id){
          $scope.regionvalue = $scope.regionValue;
        }
       
      });

  };

  
  
 
    };

    regionManagerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('regionManagerDetailController', regionManagerDetailController)
  })();