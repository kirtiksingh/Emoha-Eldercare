/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addRegionManagerService = function ($http,$rootScope) {
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

    factory.addRegionManager = function (rm_name,rm_mob,rm_alt_mob_no,rm_email,rm_address,rm_dob,rm_gender,rm_language,rm_education_1,rm_education_2,rm_education_3,password,user_type) {
        var serviceInput = {};
        serviceInput.rm_name = rm_name;
        serviceInput.rm_mob = rm_mob;
        // serviceInput.region_id = region_id;
        serviceInput.rm_alt_mob_no = rm_alt_mob_no;
        serviceInput.rm_email = rm_email;
        serviceInput.rm_address = rm_address;
        serviceInput.rm_dob = rm_dob;
        serviceInput.rm_gender = rm_gender;
        serviceInput.rm_language = rm_language;
        serviceInput.rm_education_1 = rm_education_1;
        serviceInput.rm_education_2 = rm_education_2;
        serviceInput.rm_education_3 = rm_education_3;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
        
      return $http.post("http://13.233.7.113:5000/api/add/region_manager",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    addRegionManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addRegionManagerService', addRegionManagerService);
  })();