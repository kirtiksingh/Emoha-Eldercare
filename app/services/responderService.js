/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var responderService = function ($http,$rootScope) {
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

    factory.getAllResponderData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/responder")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    responderService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('responderService',responderService);
  })();