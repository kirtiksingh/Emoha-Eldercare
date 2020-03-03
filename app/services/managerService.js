/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var managerService = function ($http,$rootScope) {
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

    factory.clusterManager = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/cluster_manager")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

    factory.regionManager = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/region_manager")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.communityManager = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/comm_manager")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.getCareCoordinator = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/care_coordinator")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };



  //   factory.addRegionManagerdata = function (region_name,region_location,region_address,region_phone,rm_id) {
  //     var serviceInput = {};
  //     serviceInput.region_name = region_name;
  //     serviceInput.region_location = region_location;
  //     serviceInput.region_address = region_address;
  //     serviceInput.region_phone = region_phone;
  //     serviceInput.rm_id = rm_id;

  //   return $http.get("http://13.233.7.113:5000/api/add/region")
  //     .success(function (results) {
  //       return results;
  //     })
  //     .error(function (data) {
  //       alert('Connection Problem');
  //     });
  // };
      return factory;
    };
    managerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('managerService',managerService);
  })();