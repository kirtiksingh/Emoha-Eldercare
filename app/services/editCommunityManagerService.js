/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var editCommunityManagerService = function ($http,$rootScope) {
      var factory = {};
    
      factory.updateCommuntyManager=function(cm_name,cm_id,cm_mob,cm_alt_mob_no,cm_email,cm_address,cm_dob,cm_gender,cm_education_1,cm_education_2,cm_education_3,cm_language) {
          var serviceInput = {};
          serviceInput.cm_name =cm_name;
          // serviceInput.rm_id=rm_id;
         
          serviceInput.cm_mob=cm_mob;
          serviceInput.cm_alt_mob_no=cm_alt_mob_no;
          serviceInput.cm_email=cm_email;
          serviceInput.cm_address=cm_address;
          serviceInput.cm_dob=cm_dob;
          serviceInput.cm_gender=cm_gender;
          serviceInput.cm_education_1=cm_education_1;
          serviceInput.cm_education_2=cm_education_2;
          serviceInput.cm_education_3=cm_education_3;
          serviceInput.cm_language=cm_language;
          
          // return $http.get("http://13.233.7.113:5000/api/get/flag_motioring/" + emg ,serviceInput)
          //   .success(function (results) {
          //     return results;
          //   })
          //   .error(function (data) {
          //     alert('Connection Problem');
          //   });
          return $http.put("http://13.233.7.113:5000/api/update/comm_manager/" + cm_id,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Error');
          });
        };
     
        return factory;
    };
    editCommunityManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('editCommunityManagerService',editCommunityManagerService);
  })();