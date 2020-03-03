/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope','$timeout'];
    var mainService = function ($http,$rootScope,$timeout) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:testing
     inputJSON:
     outputJSON:
     Description:
     UseIn:mainController
     OwnerName:Sushma
     Date:

     *******************************************************/

    factory.custmerDetails = function () {
     
      return $http.get("http://13.233.7.113:5000/api/customer/details")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.monitoringdata = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/processing/emrg")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.getResponderData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/onduty/responder")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.emergencyDetailsData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/emrg_details")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
   
  

      return factory;
    };
    mainService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('mainService', mainService);
  })();