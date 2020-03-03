/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addCareManagerService = function ($http,$rootScope) {
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

    factory.addCareManager = function (crm_name,crm_mob,crm_alt_mob_no,comm_id,crm_email,crm_address,crm_dob,crm_gender,crm_language,crm_education_1,crm_education_2,crm_education_3,password,user_type) {
        var serviceInput = {};
        serviceInput.crm_name = crm_name;
        serviceInput.crm_mob = crm_mob;
        serviceInput.crm_alt_mob_no = crm_alt_mob_no;
        serviceInput.crm_email = crm_email;
        serviceInput.crm_address = crm_address;
        serviceInput.crm_dob = crm_dob;
        serviceInput.comm_id = comm_id;
        serviceInput.crm_gender = crm_gender;
        serviceInput.crm_language = crm_language;
        serviceInput.crm_education_1 = crm_education_1;
        serviceInput.crm_education_2 = crm_education_2;
        serviceInput.crm_education_3 = crm_education_3;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
      
        
      return $http.post("http://13.233.7.113:5000/api/add/care_manager",serviceInput)
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

      return factory;
    };
    addCareManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addCareManagerService', addCareManagerService);
  })();