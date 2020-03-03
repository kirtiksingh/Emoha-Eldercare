/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addClusterManagerService = function ($http,$rootScope) {
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

    factory.addClusterManager = function (clm_name,clm_mob,clm_alt_mob_no,clm_email,clm_address,clm_dob,clm_gender,clm_language,clm_education_1,clm_education_2,clm_education_3,password,user_type) {
        var serviceInput = {};
        serviceInput.clm_name = clm_name;
        serviceInput.clm_mob = clm_mob;
        // serviceInput.cluster_id = cluster_id;
        serviceInput.clm_alt_mob_no = clm_alt_mob_no;
        serviceInput.clm_email = clm_email;
        serviceInput.clm_address = clm_address;
        serviceInput.clm_dob = clm_dob;
        serviceInput.clm_gender = clm_gender;
        serviceInput.clm_language = clm_language;
        serviceInput.clm_education_1 = clm_education_1;
        serviceInput.clm_education_2 = clm_education_2;
        serviceInput.clm_education_3 = clm_education_3;
        serviceInput.password = password;
        serviceInput.user_type = user_type;
        
      return $http.post("http://13.233.7.113:5000/api/add/cluster_manager",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    addClusterManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addClusterManagerService', addClusterManagerService);
  })();