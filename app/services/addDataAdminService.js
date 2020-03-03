/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addDataAdminService = function ($http,$rootScope) {
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

    factory.customerId = function (customerId) {
     
      return $http.get("http://13.233.7.113:5000/api/customer/details/all/" + customerId)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    addDataAdminService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addDataAdminService', addDataAdminService);
  })();