'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','careManagerService'];
  var careManagerController = function ($scope,$rootScope,$location,careManagerService) {

    $scope.search = function(item) {
      if (!$scope.query || (item.crm_name.toLowerCase().indexOf($scope.query) != -1) || (item.crm_mob.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
          return true;
      }
      return false;
  };
   $scope.CareManagerId = function (crm_id){
     $rootScope.CareId = crm_id;
   }
    $rootScope.getCareManagerData = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.CareManagerDetails = {};
      careManagerService.getCareManagerData().success(function (result) {
       
        if (result) {
         
          $rootScope.careManagerDetails = result;
         
          angular.forEach($rootScope.careManagerDetails, function (element) {
          //  alert(element)
           $rootScope.careManagervalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    
    };

    careManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careManagerController', careManagerController)
  })();