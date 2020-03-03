/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var assignResponderService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:emergencyCases
     inputJSON:
     outputJSON:
     Description:
     UseIn:emergencyCasesController
     OwnerName:Sushma
     Date:

     *******************************************************/
    factory.loadMap = function (loadMap) {
      var serviceInput = {};
      serviceInput.loadMap = loadMap;
      
      return $http.get("http://13.233.7.113:5000/api/get/responder/location/" +loadMap ,serviceInput)
            .success(function (results) {
              return results;
            })
            .error(function (data) {
              alert('Connection Problem');
            });
    };
    factory.customerLocation = function (emgvaluedata) {
      var serviceInput = {};
      serviceInput.emgvaluedata = emgvaluedata;
      
      return $http.get("http://13.233.7.113:5000/api/get/proce_comp/" +emgvaluedata ,serviceInput)
            .success(function (results) {
              return results;
            })
            .error(function (data) {
              alert('Connection Problem');
            });
    };
      return factory;
    };
    assignResponderService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('assignResponderService',assignResponderService);
  })();