'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','responderService'];
  var responderController = function ($scope,$rootScope,$location,responderService) {

    $scope.search = function(item) {
      if (!$scope.query || (item.rsp_name.toLowerCase().indexOf($scope.query) != -1) || (item.res_mob.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
          return true;
      }
      return false;
  };

  $scope.responderId=function(rsp_id){
    $rootScope.respId=rsp_id;
  }
    $rootScope.getAllResponderData = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.responderDetails = {};
      responderService.getAllResponderData().success(function (result) {
       
        if (result) {
         
          $rootScope.responderDetails = result;
         
          angular.forEach($rootScope.responderDetails, function (element) {
          //  alert(element)
           $rootScope.respondervalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    };

    responderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('responderController', responderController)
  })();