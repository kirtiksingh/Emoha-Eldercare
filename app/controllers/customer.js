'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','customerService'];
  var customerController = function ($scope,$rootScope,$location,$filter,customerService) {

    $scope.search = function(item) {
      if (!$scope.query || (item.cust_name.toLowerCase().indexOf($scope.query) != -1) || (item.cust_mob.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
          return true;
      }
      return false;
  };
  $scope.customer = {
    Id: "",
  }; 

 $rootScope.customerId = function(cust_id){
  $rootScope.customerIdValue = cust_id;
  customerService.customerId(cust_id).success(function (result) {
     
    if (result) {
     
      $rootScope.customerIdDetailsData = result;
     
    }
   
  });

 };

//  $scope.customerIdValue = function(cust_id){
//   $rootScope.customerIdValue = cust_id;
//  };

  $rootScope.custmerDetails = function () {
   
    $scope.customerDetailsdata = [];
    $rootScope.customerDetails = {};
    customerService.custmerDetails().success(function (result) {
     
      if (result) {
       
        $rootScope.customerDetails = result;
       
        angular.forEach($rootScope.customerDetails, function (element) {
        //  alert(element)
         $rootScope.customerDetailsvalue = element;
         
        //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
        })
       
      }
     
    });
  };

  $scope.test = function () {
    $scope.pageChangeHandler = function(num) {
      console.log('going to page ' + num);
    };
  }
  

    };

    customerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('customerController', customerController)
  })();