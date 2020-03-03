/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addNurseService = function ($http,$rootScope) {
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

    factory.addNurse = function (nurse_name,nurse_mob,nurse_alt_mob_no,nurse_email,cluster_id,nurse_address,nurse_dob,nurse_gender,nurse_language,nurse_education_1,nurse_education_2,nurse_education_3,nurse_duty_hrs,nurse_shift,password,user_type) {
        var serviceInput = {};
        serviceInput.nurse_name = nurse_name;
        serviceInput.nurse_mob = nurse_mob;
        // serviceInput.region_id = region_id;
        serviceInput.nurse_alt_mob_no = nurse_alt_mob_no;
        serviceInput.nurse_email = nurse_email;
        serviceInput.cluster_id = cluster_id;
        serviceInput.nurse_address = nurse_address;
        serviceInput.nurse_dob = nurse_dob;
        serviceInput.nurse_gender = nurse_gender;
        serviceInput.nurse_language = nurse_language;
        serviceInput.nurse_education_1 = nurse_education_1;
        serviceInput.nurse_education_2 = nurse_education_2;
        serviceInput.nurse_education_3 = nurse_education_3;
        serviceInput.nurse_duty_hrs = nurse_duty_hrs;
        serviceInput.nurse_shift = nurse_shift;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
        
      return $http.post("http://13.233.7.113:5000/api/add/nurse",serviceInput)
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
    addNurseService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addNurseService', addNurseService);
  })();