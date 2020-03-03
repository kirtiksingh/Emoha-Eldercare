/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addAttendentService = function ($http,$rootScope) {
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

    factory.addAttendent = function (attd_name,attd_mob,attd_alt_mob_no,attd_email,cluster_id,attd_address,attd_dob,attd_gender,attd_language,attd_education_1,attd_education_2,attd_education_3,attd_duty_hrs,attd_shift,password,user_type) {
        var serviceInput = {};
        serviceInput.attd_name = attd_name;
        serviceInput.attd_mob = attd_mob;
        // serviceInput.region_id = region_id;
        serviceInput.attd_alt_mob_no = attd_alt_mob_no;
        serviceInput.attd_email = attd_email;
        serviceInput.cluster_id = cluster_id;
        serviceInput.attd_address = attd_address;
        serviceInput.attd_dob = attd_dob;
        serviceInput.attd_gender = attd_gender;
        serviceInput.attd_language = attd_language;
        serviceInput.attd_education_1 = attd_education_1;
        serviceInput.attd_education_2 = attd_education_2;
        serviceInput.attd_education_3 = attd_education_3;
        serviceInput.attd_duty_hrs = attd_duty_hrs;
        serviceInput.attd_shift = attd_shift;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
        
      return $http.post("http://13.233.7.113:5000/api/add/attendent",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

    // factory.getClusterData = function () {
     
    //   return $http.get("http://13.233.7.113:5000/api/get/cluster")
    //     .success(function (results) {
    //       return results;
    //     })
    //     .error(function (data) {
    //       alert('Connection Problem');
    //     });
    // };

    factory.getClusterData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/cluster")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
      return factory;
    };
    addAttendentService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addAttendentService', addAttendentService);
  })();