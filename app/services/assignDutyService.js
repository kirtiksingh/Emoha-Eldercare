/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var assignDutyService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:clusterManager
     inputJSON:
     outputJSON:
     Description:
     UseIn:managerController
     OwnerName:Sushma
     Date:

     *******************************************************/

    factory.getCareManagerData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/care_manager")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.custmerDetails = function () {
     
      return $http.get("http://13.233.7.113:5000/api/customer/details")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
      factory.getCustomerData = function (comm_id) {
     
        return $http.get("http://13.233.7.113:5000/api/get/customer/" + comm_id)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
  
      factory.assignDuty = function (cust_id,crm_id) {
        var serviceInput = {};
        serviceInput.cust_id = cust_id;
        serviceInput.crm_id = crm_id;
  
      return $http.post("http://13.233.7.113:5000/api/get/assignduty",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    assignDutyService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('assignDutyService',assignDutyService);
  })();