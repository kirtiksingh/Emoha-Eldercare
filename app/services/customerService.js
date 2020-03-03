/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var customerService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:custmerDetails
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
    factory.customerId = function (cust_id) {
     
      return $http.get("http://13.233.7.113:5000/api/customer/details/all/" + cust_id)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    customerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('customerService', customerService);
  })();