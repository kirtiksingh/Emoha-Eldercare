/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope','$timeout'];
    var homeLogoutMapService = function ($http,$rootScope,$timeout) {
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
    factory.addRoom = function (cust_id,room_type,room_name) {
        var serviceInput = {}; 
        serviceInput.cust_id = cust_id;
        serviceInput.room_type = room_type;
        serviceInput.room_name = room_name;
      return $http.post("http://13.233.7.113:5000/api/post_room",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.removehomeMap = function (id) {
        var serviceInput = {}; 
        serviceInput.id = id;
        // serviceInput.cust_id = cust_id;
        // serviceInput.room_type = room_type;
        // serviceInput.room_name = room_name;
      return $http.post("http://13.233.7.113:5000/api/delete/room",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.savehomeMap = function (id,cust_id,cust_room_type,cust_room_name) {
        var serviceInput = {}; 
        serviceInput.id = id;
        serviceInput.cust_id = cust_id;
        serviceInput.room_type = cust_room_type;
        serviceInput.room_name = cust_room_name;
      return $http.put("http://13.233.7.113:5000/api/post_room",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.gethomeLogoutMap = function (CustomerIdValue) {
      var serviceInput = {}; 
        serviceInput.CustomerIdValue = CustomerIdValue;
        return $http.get("http://13.233.7.113:5000/api/add/roomss/" + CustomerIdValue ,serviceInput )
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      return factory;
    };
    homeLogoutMapService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('homeLogoutMapService', homeLogoutMapService);
  })();