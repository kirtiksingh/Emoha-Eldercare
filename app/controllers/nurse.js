'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','nurseService'];
  var nurseController = function ($scope,$rootScope,$location,nurseService) {

    $rootScope.getNurseData = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.nurseDetails = {};
      nurseService.getNurseData().success(function (result) {
       
        if (result) {
         
          $rootScope.nurseDetails = result;
         
          angular.forEach($rootScope.nurseDetails, function (element) {
          //  alert(element)
           $rootScope.nursevalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };

    };

    nurseController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('nurseController', nurseController)
  })();