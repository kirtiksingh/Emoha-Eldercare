/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addCareCoordinatorService = function ($http,$rootScope) {
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

    factory.addCareCoordinator = function (ccd_name,ccd_mob,ccd_alt_mob_no,ccd_email,ccd_address,ccd_dob,ccd_gender,ccd_language,ccd_education_1,ccd_education_2,ccd_education_3,password,user_type) {
        var serviceInput = {};
        serviceInput.ccd_name = ccd_name;
        serviceInput.ccd_mob = ccd_mob;
        // serviceInput.comm_id = comm_id;
        serviceInput.ccd_alt_mob_no = ccd_alt_mob_no;
        serviceInput.ccd_email = ccd_email;
        serviceInput.ccd_address = ccd_address;
        serviceInput.ccd_dob = ccd_dob;
        serviceInput.ccd_gender = ccd_gender;
        serviceInput.ccd_language = ccd_language;
        serviceInput.ccd_education_1 = ccd_education_1;
        serviceInput.ccd_education_2 = ccd_education_2;
        serviceInput.ccd_education_3 = ccd_education_3;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
        
      return $http.post("http://13.234.179.251:5000/api/add/care_corrdinator",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    addCareCoordinatorService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addCareCoordinatorService', addCareCoordinatorService);
  })();