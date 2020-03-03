/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addCommunityManagerService = function ($http,$rootScope) {
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

    factory.addCommunityManager = function (cm_name,cm_mob,cm_alt_mob_no,cm_email,cm_address,cm_dob,cm_gender,cm_language,cm_education_1,cm_education_2,cm_education_3,password,user_type) {
        var serviceInput = {};
        serviceInput.cm_name = cm_name;
        serviceInput.cm_mob = cm_mob;
        // serviceInput.comm_id = comm_id;
        serviceInput.cm_alt_mob_no = cm_alt_mob_no;
        serviceInput.cm_email = cm_email;
        serviceInput.cm_address = cm_address;
        serviceInput.cm_dob = cm_dob;
        serviceInput.cm_gender = cm_gender;
        serviceInput.cm_language = cm_language;
        serviceInput.cm_education_1 = cm_education_1;
        serviceInput.cm_education_2 = cm_education_2;
        serviceInput.cm_education_3 = cm_education_3;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
        
      return $http.post("http://13.233.7.113:5000/api/add/comm_manager",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    addCommunityManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addCommunityManagerService', addCommunityManagerService);
  })();