/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var editCareManagerService = function ($http,$rootScope) {
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
    factory.updateCareManager=function(crm_name,crm_id,crm_mob, crm_alt_mob_no,crm_email,crm_address,crm_dob,crm_education_1,crm_education_2,crm_education_3,crm_gender,comm_id,crm_language) {
        var serviceInput = {};
        serviceInput.crm_name =crm_name;
        // serviceInput.rm_id=rm_id;
       
        serviceInput.crm_mob=crm_mob;
        serviceInput.crm_alt_mob_no=crm_alt_mob_no;
        serviceInput.crm_email=crm_email;
        serviceInput.crm_address=crm_address;
        serviceInput.crm_dob=crm_dob;
        serviceInput.crm_gender=crm_gender;
        serviceInput.crm_education_1=crm_education_1;
        serviceInput.crm_education_2=crm_education_2;
        serviceInput.crm_education_3=crm_education_3;
        serviceInput.comm_id=comm_id;
        serviceInput.crm_language=crm_language;
        
        
        // return $http.get("http://13.233.7.113:5000/api/get/flag_motioring/" + emg ,serviceInput)
        //   .success(function (results) {
        //     return results;
        //   })
        //   .error(function (data) {
        //     alert('Connection Problem');
        //   });
        return $http.put("http://13.233.7.113:5000/api/update/care_manager/" + crm_id,serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Error');
        });
      };
   
      return factory;
    };
    editCareManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('editCareManagerService',editCareManagerService);
  })();