'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','assignDutyService'];
  var assignDutyController = function ($scope,$rootScope,$location,assignDutyService) {

    
 $scope.selectedShift={};
 $scope.shifts = 
 [
   {
   "selected":false,
   "name":"Morning",
  },
 {
   "selected":false,
   "name":"Evening",
  },
  {
    "selected":false,
    "name":"Night",
   },

 ];
 $scope.selectedShift   =   $scope.shifts[0]; 

   
 $scope.selectedattendentShifts={};
 $scope.attendentshifts = 
 [
   {
   "selected":false,
   "name":"Morning",
  },
 {
   "selected":false,
   "name":"Evening",
  },
  {
    "selected":false,
    "name":"Night",
   },

 ];
 $scope.selectedattendentShifts   =   $scope.attendentshifts[0]; 


    $rootScope.getCareManagerData = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.CareManagerDetails = {};
      assignDutyService.getCareManagerData().success(function (result) {
       
        if (result) {
         
          $rootScope.careManagerDetails = result;
         
          angular.forEach($rootScope.careManagerDetails, function (element) {
          //  alert(element)
           $rootScope.careManagervalue = element;
           $scope.assignid = $rootScope.assigndutyid;
           if($scope.assignid == $rootScope.careManagervalue.crm_id ){
                    $scope.careManagerName = $rootScope.careManagervalue.crm_name;
                    $rootScope.careManagerId = $rootScope.careManagervalue.crm_id;
                   $scope.communityName = $rootScope.careManagervalue.comm_name;
                   
                  }
          })
         
        }
       
      });
    };
  
    $scope.assigndutydata = function(crm_id){
      $rootScope.assigndutyid = crm_id;
    };
    $scope.getCustomerData = function(comm_id){
      $scope.getCustomer = {};
      assignDutyService.getCustomerData(comm_id).success(function (result) {
        if (result) {
         
          $rootScope.getCustomerValue = result;
        }
      });
      
    };
    $rootScope.custmerDetails = function () {
   
      $scope.customerDetailsdata = [];
      $rootScope.customerDetails = {};
      assignDutyService.custmerDetails().success(function (result) { 
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
   $scope.assigncmanagerduty =
   {
    cust_id:"",
    crm_id:"",
    CustomerId:"",
   }
   
    $scope.assignDuty = function(){
     $scope.cust_id = $scope.assigncmanagerduty.CustomerId.cust_id;
     $scope.crm_id = $rootScope.careManagerId;
     assignDutyService.assignDuty($scope.cust_id,$scope.crm_id).success(function (result) {
      if (result) {
        alert(result);
        window.location = '/assignDuty/';
      }
      else{
        alert("error");
      }
    });
    };

    $scope.clearassignDuty = function(){
      $scope.assigncmanagerduty = "";
      // $scope.communityName = "";
      // $scope.careManagerName ="";
     } ;
    };

    assignDutyController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('assignDutyController', assignDutyController)
  })();