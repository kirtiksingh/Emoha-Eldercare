/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var monitoringService = function ($http,$rootScope) {
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
    factory.assignResponderData = function (emg_case_no,emg_date_time,cust_name,cust_id,emg_location,cust_mob,emg_type,emg_desc,emg_id,rsp_id,comm_id,res_mob,emg_msg) {
      var serviceInput = {};
      serviceInput.emg_case_no = emg_case_no;
      serviceInput.emg_date_time = emg_date_time;
      serviceInput.cust_name = cust_name;
      serviceInput.cust_id = cust_id;
      serviceInput.emg_location = emg_location;
      serviceInput.cust_mob = cust_mob;
      serviceInput.emg_type = emg_type;
      serviceInput.emg_desc = emg_desc;
      serviceInput.emg_id = emg_id;
      serviceInput.rsp_id = rsp_id;
      serviceInput.comm_id = comm_id;
      serviceInput.res_mob = res_mob;
      serviceInput.emg_msg = emg_msg;
    return $http.post("http://13.233.7.113:5000/api/post/add/responder_emerg",serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('Connection Problem');
      });
  };

    factory.getResponderData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/responder")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    
      factory.monitoringdata = function () {
     
        return $http.get("http://13.233.7.113:5000/api/get/proce_comp")
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.getRemark = function (remarkId) {
        var serviceInput = {};
        serviceInput.remarkId = remarkId;
        return $http.get("http://13.233.7.113:5000/api/get/remarks/emrg/" + remarkId ,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.viewResponder= function (respnderViewId) {
        var serviceInput = {};
        serviceInput.respnderViewId = respnderViewId;
        return $http.get("http://13.233.7.113:5000/api/details/responder/" + respnderViewId ,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.viewdata = function (emg_id) {
        var serviceInput = {};
        serviceInput.emg_id = emg_id;
        return $http.get("http://13.233.7.113:5000/api/get/proce_comp/sh/" + emg_id ,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.assigndatavalue = function (emg_case_no) {
     
        return $http.get("http://13.233.7.113:5000/api/get/emrg_assigndetails/" + emg_case_no)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.getFlagValue = function (emg) {
        var serviceInput = {};
        serviceInput.emg = emg;
        return $http.get("http://13.233.7.113:5000/api/get/proce_comp/" + emg ,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.buttonActivation = function (emgValue,date,flagvalue) {
        var serviceInput = {};
        serviceInput.emgValue = emgValue;
        serviceInput.date = date;
        serviceInput.flagvalue = flagvalue;
        return $http.post("http://13.233.7.113:5000/api/put/flag_motioring/" + emgValue +"/" + flagvalue,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.addRemark = function (emg_id,datetime,remark,r_user) {
        var serviceInput = {};
        serviceInput.emg_id = emg_id;
        serviceInput.remark = remark;
        serviceInput.datetime = datetime;
        serviceInput.r_user = r_user;
        
      return $http.post("http://13.233.7.113:5000/api/post/remarks/emrg",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
   
      return factory;
    };
    monitoringService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('monitoringService',monitoringService);
  })();