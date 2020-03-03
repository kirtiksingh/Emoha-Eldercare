/**
 * Created by root on 25/5/19.
 */
(function () {
  var injectParams = ['$http','$rootScope'];
  var editRegionManagerService = function ($http,$rootScope) {
  
    var factory = {};
  
  factory.updateRegionManager = function (rm_name,rm_id,rm_mob,rm_alt_mob_no,rm_email,rm_address,rm_dob,rm_education_1,rm_education_2,rm_education_3,rm_gender,rm_language) {
      var serviceInput = {};
      serviceInput.rm_name =rm_name;
      // serviceInput.rm_id=rm_id;
      serviceInput.rm_mob=rm_mob;
      serviceInput.rm_alt_mob_no=rm_alt_mob_no;
      serviceInput.rm_email=rm_email;
      serviceInput.rm_address=rm_address;
      serviceInput.rm_dob=rm_dob;
      
      serviceInput.rm_education_1=rm_education_1;
      serviceInput.rm_education_2=rm_education_2;
      serviceInput.rm_education_3=rm_education_3;
      serviceInput.rm_gender=rm_gender;
      serviceInput.rm_language=rm_language;


      
      // return $http.get("http://13.233.7.113:5000/api/get/flag_motioring/" + emg ,serviceInput)
      //   .success(function (results) {
      //     return results;
      //   })
      //   .error(function (data) {
      //     alert('Connection Problem');
      //   });
      return $http.put("http://13.233.7.113:5000/api/update/region_manager/" + rm_id,serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('Error');
      });
    };
 
    return factory;
  };
  editRegionManagerService.$inject = injectParams;
  angular.module('seniorApp')
    .factory('editRegionManagerService',editRegionManagerService);
})();