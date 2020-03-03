/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var editResponderService = function ($http,$rootScope) {
    
      var factory = {};
    
    factory.updateResponder = function (rsp_name,rsp_id,res_mob,rsp_alt_mob_no,rsp_email,rsp_address,rsp_dob,rsp_education_1,rsp_education_2,rsp_education_3,comm_id,rsp_gender,rsp_language ) {
        var serviceInput = {};
        serviceInput.rsp_name =rsp_name;
        // serviceInput.rm_id=rm_id;
        serviceInput.res_mob=res_mob;
        serviceInput.rsp_alt_mob_no=rsp_alt_mob_no;
        serviceInput.rsp_email=rsp_email;
        serviceInput.rsp_address=rsp_address;
        serviceInput.rsp_dob=rsp_dob;
        
        serviceInput.rsp_education_1=rsp_education_1;
        serviceInput.rsp_education_2=rsp_education_2;
        serviceInput.rsp_education_3=rsp_education_3;
        serviceInput.comm_id=comm_id;
        serviceInput.rsp_gender=rsp_gender;
        serviceInput.rsp_language=rsp_language;
  
  
        
        // return $http.get("http://13.233.7.113:5000/api/get/flag_motioring/" + emg ,serviceInput)
        //   .success(function (results) {
        //     return results;
        //   })
        //   .error(function (data) {
        //     alert('Connection Problem');
        //   });
        return $http.put("http://13.233.7.113:5000/api/update/responder/" + rsp_id,serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Error');
        });
      };
   
      return factory;
    };
    editResponderService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('editResponderService',editResponderService);
  })();