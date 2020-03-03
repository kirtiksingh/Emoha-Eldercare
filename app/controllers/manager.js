'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','managerService'];
  var managerController = function ($scope,$rootScope,$location,$filter,managerService) {

    $scope.Search1=function(item){
      if(!$scope.query||(item.clm_name.toLowerCase().indexOf($scope.query)!=-1) ||(item.clm_mob.indexOf($scope.query)!= -1 )||(item.cluster_name.toLowerCase().indexOf($scope.query))!=-1){
        return true;
      }
      return false;
    };
  
   $rootScope.clusterId = function(clm_id){
    $rootScope.clusterIdValue = clm_id;
   };

    $rootScope.clusterManager = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.clusterManagerDetails = {};
      managerService.clusterManager().success(function (result) {
       
        if (result) {
         
          $rootScope.clusterManagerDetails = result;
         
          angular.forEach($rootScope.clusterManagerDetails, function (element) {
          //  alert(element)
           $rootScope.clusterManagerDetailsvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    
    // $scope.region = {
    //   Id: "",
    // }; 
    $scope.Search=function(item){
      if(!$scope.queryRegionmanager||(item.region_name.toLowerCase().indexOf($scope.queryRegionmanager)!=-1) ||(item.rm_mob.indexOf($scope.queryRegionmanager)!= -1 )||(item.rm_name.toLowerCase().indexOf($scope.queryRegionmanager))!=-1){
        return true;
      }
      return false;
    };
   $rootScope.regionId = function(rm_id){
    $rootScope.regionIdValue = rm_id;
   };

    $rootScope.regionManager = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.regionManagerDetails = {};
      managerService.regionManager().success(function (result) {
       
        if (result) {
         
          $rootScope.regionManagerDetails = result;
         
          angular.forEach($rootScope.regionManagerDetails, function (element) {
         
           $rootScope.regionManagerDetailsvalue = element;
           
         
          })
         
        }
       
      });
    };
    $scope.Search3=function(item){
      if(!$scope.query2||(item.cm_name.toLowerCase().indexOf($scope.query2)!=-1) ||(item.cm_mob.indexOf($scope.query2)!= -1 )||(item.comm_name.toLowerCase().indexOf($scope.query2))!=-1){
        return true;
      }
      return false;
    };

    $rootScope.communityId = function(cm_id){
      $rootScope.communityIdValue = cm_id;
     };
    $rootScope.communityManager = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.communityManagerDetails = {};
      managerService.communityManager().success(function (result) {
       
        if (result) {
         
          $rootScope.communityManagerDetails = result;
         
          angular.forEach($rootScope.communityManagerDetails, function (element) {
          //  alert(element)
           $rootScope.communityManagerDetailsvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    $rootScope.getCareCoordinator = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.careCoordinatorDetails = {};
      managerService.getCareCoordinator().success(function (result) {
       
        if (result) {
         
          $rootScope.careCoordinatorDetails = result;
         
          angular.forEach($rootScope.careCoordinatorDetails, function (element) {
          //  alert(element)
           $rootScope.careCoordinatorDetailsvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };

    };

    managerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('managerController', managerController)
  })();