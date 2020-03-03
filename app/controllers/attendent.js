'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','attendentService'];
  var attendentController = function ($scope,$rootScope,$location,attendentService) {

    $rootScope.getAttendentData = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.attendentDetails = {};
      attendentService.getAttendentData().success(function (result) {
       
        if (result) {
         
          $rootScope.attendentDetails = result;
         
          angular.forEach($rootScope.attendentDetails, function (element) {
          //  alert(element)
           $rootScope.attendentvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };

    };

    attendentController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('attendentController', attendentController)
  })();