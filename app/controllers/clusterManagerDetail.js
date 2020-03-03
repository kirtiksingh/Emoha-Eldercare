'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var clusterManagerDetailController = function ($scope,$rootScope,$location) {


//     $scope.clicked1 = function(){
//       alert("Successfully data Send");
//   }
  
  
  // $scope.customerId = $rootScope.customerIdValue ;
 
  $scope.clustervalue = [{
    value:"",
  }];
  //  $scope.custvalue.value =   $rootScope.customerDetails ; 
  $scope.clusterIdData = function(){
    $scope.clusterId = $rootScope.clusterIdValue ;
    $scope.clustervalue.value =   $rootScope.clusterManagerDetails ;

    angular.forEach($scope.clustervalue.value, function (element) {
      $scope.clusterValue = element;
        if( $scope.clusterId == $scope.clusterValue.clm_id){
          $scope.clustervalue = $scope.clusterValue;
        }
       
      })

  };

  
  
 
    };

    clusterManagerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('clusterManagerDetailController', clusterManagerDetailController)
  })();