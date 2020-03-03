/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var sensorConfigService = function ($http,$rootScope) {
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
    // factory.sensordata = function (custIdvalue) {
    //   var serviceInput = {};
    //   serviceInput.cust_id = custIdvalue;
    //   return $http.get("http://13.233.7.113:5000/api/get/sensor_config")
    //     .success(function (results) {
    //       return results;
    //     })
    //     .error(function (data) {
    //       alert('Connection Problem');
    //     });
    // };
    factory.addSensorConfig = function (id,room_name,cust_id,sensor_no,alert_msg,alert_type,alert_location) {
      var serviceInput = {};
      serviceInput.id = id;
      serviceInput.room_name = room_name;
      serviceInput.cust_id = cust_id;
      serviceInput.sensor_no = sensor_no;
      serviceInput.alert_msg = alert_msg;
      serviceInput.alert_type = alert_type;
      serviceInput.alert_location = alert_location;

    return $http.post("http://13.233.7.113:5000/api/sensor_config",serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('Connection Problem');
      });
  };
  factory.sensordata = function (custIdvalue) {
    var serviceInput = {};
    serviceInput.custIdvalue = custIdvalue;
    
    return $http.get("http://13.233.7.113:5000/api/get/room/particular/" + custIdvalue ,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
};
factory.getRoomType = function (roomTypeValue) {
  var serviceInput = {};
  serviceInput.roomTypeValue = roomTypeValue;
  
  return $http.get("http://13.233.7.113:5000/api/add/roomss/" + roomTypeValue ,serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
};
factory.getSensorConfigData = function (sensorId) {
  var serviceInput = {};
  serviceInput.sensorId = sensorId;
  
  return $http.get("http://13.233.7.113:5000/api/get/room/particular/" +sensorId ,serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
};
factory.checkSensorNo = function (custId,sensorNo) {
  var serviceInput = {};
  serviceInput.custId = custId;
  serviceInput.sensorNo = sensorNo;
  return $http.get("http://13.233.7.113:5000/api/compare/sensor/" +custId + "/" +sensorNo  ,serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
};
factory.removesensorconfig = function (custId,sensorNo) {
  var serviceInput = {};
  serviceInput.custId = custId;
  serviceInput.sensorNo = sensorNo;
  return $http.post("http://13.233.7.113:5000/api/delete/sensor",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
};
      return factory;
    };
    sensorConfigService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('sensorConfigService', sensorConfigService);
  })();