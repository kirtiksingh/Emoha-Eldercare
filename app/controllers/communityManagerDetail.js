'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var communityManagerDetailController = function ($scope,$rootScope,$location) {


//     $scope.clicked1 = function(){
//       alert("Successfully data Send");
//   }
  
  
  // $scope.customerId = $rootScope.customerIdValue ;
 
  $scope.communityvalue = [{
    value:"",
  }];
  //  $scope.custvalue.value =   $rootScope.customerDetails ; 
  $scope.communityIdData = function(){
    $scope.communityId = $rootScope.communityIdValue ;
    $scope.communityvalue.value =   $rootScope.communityManagerDetails ;

    angular.forEach($scope.communityvalue.value, function (element) {
      $scope.communityValue = element;
        if( $scope.communityId == $scope.communityValue.cm_id){
          $scope.communityvalue = $scope.communityValue;
        }
       
      })

  };

  
  
 
    };

    communityManagerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('communityManagerDetailController', communityManagerDetailController)
  })();