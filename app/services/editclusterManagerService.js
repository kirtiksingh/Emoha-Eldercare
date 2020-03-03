/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var editclusterManagerService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
      /***************** *************************************
       functionName:clusterManager
       inputJSON:
       outputJSON:
       Description:
       UseIn:managerController
       OwnerName:Sushma
       Date:
  
       *******************************************************/
      factory.updateClusterManager=function(clm_name,clm_id,clm_mob,clm_alt_mob_no,clm_email,clm_address,clm_dob, clm_gender,clm_education_1,clm_education_2,clm_education_3,clm_language) {
          var serviceInput = {};
          serviceInput.clm_name =clm_name;
          // serviceInput.rm_id=rm_id;
         
          serviceInput.clm_mob=clm_mob;
          serviceInput.clm_alt_mob_no=clm_alt_mob_no;
          serviceInput.clm_email=clm_email;
          serviceInput.clm_address=clm_address;
          serviceInput.clm_dob=clm_dob;
          serviceInput.clm_gender=clm_gender;
          serviceInput.clm_education_1=clm_education_1;
          serviceInput.clm_education_2=clm_education_2;
          serviceInput.clm_education_3=clm_education_3;
          serviceInput.clm_language=clm_language;
          
          // return $http.get("http://13.233.7.113:5000/api/get/flag_motioring/" + emg ,serviceInput)
          //   .success(function (results) {
          //     return results;
          //   })
          //   .error(function (data) {
          //     alert('Connection Problem');
          //   });
          return $http.put("http://13.233.7.113:5000/api/update/cluster_manager/" + clm_id,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Error');
          });
        };
     
        return factory;
    };
    editclusterManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('editclusterManagerService',editclusterManagerService);
  })();