/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var zoneService = function ($http,$rootScope) {
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

    factory.addRegionManagerdata = function (region_name,region_location,region_address,region_phone,rm_id) {
        var serviceInput = {};
        serviceInput.region_name = region_name;
        serviceInput.region_location = region_location;
        serviceInput.region_address = region_address;
        serviceInput.region_phone = region_phone;
        serviceInput.rm_id = rm_id;

      return $http.post("http://13.233.7.113:5000/api/add/region",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

    factory.addClusterManagerdata = function (cluster_name,cluster_location,cluster_address,cluster_phone,clm_id,region_id) {
      var serviceInput = {};
      serviceInput.cluster_name = cluster_name;
      serviceInput.cluster_location = cluster_location;
      serviceInput.cluster_address = cluster_address;
      serviceInput.cluster_phone = cluster_phone;
      serviceInput.clm_id = clm_id;
      serviceInput.region_id = region_id;

    return $http.post("http://13.233.7.113:5000/api/add/cluster",serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('Connection Problem');
      });
  };
  factory.addCommunityManagerData = function (comm_name,comm_location,comm_address,comm_phone,cluster_id,cm_id) {
    var serviceInput = {};
    serviceInput.comm_name = comm_name;
    serviceInput.comm_location = comm_location;
    serviceInput.comm_address = comm_address;
    serviceInput.comm_phone = comm_phone;
    serviceInput.cluster_id = cluster_id;
    serviceInput.cm_id = cm_id;

  return $http.post("http://13.233.7.113:5000/api/add/community",serviceInput)
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

      factory.clusterManager = function () {
     
        return $http.get("http://13.233.7.113:5000/api/get/cluster_manager")
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

      factory.getRegionManagerData = function () {
     
        return $http.get("http://13.233.7.113:5000/api/get/region")
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };

      factory.getClusterData = function () {
     
        return $http.get("http://13.233.7.113:5000/api/get/cluster")
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };

      factory.getCommunityData = function () {
     
        return $http.get("http://13.233.7.113:5000/api/get/community")
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.getAlldata = function () {
     
        return $http.get("http://13.233.7.113:5000/api/all")
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };

      return factory;
    };
    zoneService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('zoneService',zoneService);
  })();