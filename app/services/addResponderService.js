/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addResponderService = function ($http,$rootScope) {
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

    factory.addResponder = function (rsp_name,res_mob,rsp_alt_mob_no,rsp_email,comm_id,rsp_address,rsp_dob,rsp_gender,rsp_language,rsp_education_1,rsp_education_2,rsp_education_3,password,user_type) {
        var serviceInput = {};
        serviceInput.rsp_name = rsp_name;
        serviceInput.res_mob = res_mob;
        // serviceInput.region_id = region_id;
        serviceInput.rsp_alt_mob_no = rsp_alt_mob_no;
        serviceInput.rsp_email = rsp_email;
        serviceInput.comm_id = comm_id;
        serviceInput.rsp_address = rsp_address;
        serviceInput.rsp_dob = rsp_dob;
        serviceInput.rsp_gender = rsp_gender;
        serviceInput.rsp_language = rsp_language;
        serviceInput.rsp_education_1 = rsp_education_1;
        serviceInput.rsp_education_2 = rsp_education_2;
        serviceInput.rsp_education_3 = rsp_education_3;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
      
        
      return $http.post("http://13.233.7.113:5000/api/add/responder",serviceInput)
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
    addResponderService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addResponderService', addResponderService);
  })();