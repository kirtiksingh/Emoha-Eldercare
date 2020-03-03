/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addCustomerService = function ($http,$rootScope) {
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
    factory.getCommunityData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/community")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
   
    factory.addCustomer = function (user_name,mobile_number,prefered_name,user_type,alert_mob,pri_emg_name,pri_emg_mob,comm_id,datetime,user_email,cust_code,cust_address,cust_community,cust_geolocation,cust_height,cust_weight,cust_category,cust_language,cust_dob,cust_gender,cust_marital_status,cust_dom,cust_religion,cust_living_place,cust_staying_with,cust_family_member_1,cust_family_member_2,cust_family_member_3,cust_education_1,cust_education_2,cust_education_3,cust_risk_assessment_1,cust_risk_assessment_2,cust_risk_assessment_3,cust_risk_assessment_4,cust_risk_assessment_5) {
      var serviceInput = {};
      var homecare_reg = {};
      var personal_details = {};
      homecare_reg.user_name = user_name;
      homecare_reg.mobile_number = mobile_number;
      homecare_reg.prefered_named = prefered_name;
      homecare_reg.user_type = user_type;
      homecare_reg.alert_mob = alert_mob;
      // homecare_reg.regn_type = regn_type;
      homecare_reg.pri_emg_name = pri_emg_name;
      homecare_reg.comm_id = comm_id;
      homecare_reg.pri_emg_mob = pri_emg_mob;
      homecare_reg.datetime = datetime;
      personal_details.user_email = user_email;
      personal_details.cust_code = cust_code;
      personal_details.cust_address = cust_address;
      personal_details.cust_community = cust_community;
      personal_details.cust_geolocation = cust_geolocation;
      personal_details.cust_height = cust_height;
      personal_details.cust_weight = cust_weight;
      personal_details.cust_category = cust_category;
      personal_details.cust_language = cust_language;
      personal_details.cust_dob = cust_dob;
      personal_details.cust_gender = cust_gender;
      personal_details.cust_marital_status = cust_marital_status;
      personal_details.cust_dom = cust_dom;
      personal_details.cust_religion = cust_religion;
      personal_details.cust_living_place = cust_living_place;
      personal_details.cust_staying_with = cust_staying_with;
      personal_details.cust_family_member_1 = cust_family_member_1;
      personal_details.cust_family_member_2 = cust_family_member_2;
      personal_details.cust_family_member_3 = cust_family_member_3;
      personal_details.cust_education_1 = cust_education_1;
      personal_details.cust_education_2 = cust_education_2;
      personal_details.cust_education_3 = cust_education_3;
      personal_details.cust_risk_assessment_1 = cust_risk_assessment_1;
      personal_details.cust_risk_assessment_2 = cust_risk_assessment_2;
      personal_details.cust_risk_assessment_3 = cust_risk_assessment_3;
      personal_details.cust_risk_assessment_4 = cust_risk_assessment_4;
      personal_details.cust_risk_assessment_5 = cust_risk_assessment_5;
       serviceInput = {homecare_reg,personal_details};
      return $http.post("http://13.233.7.113:5000/api/registers",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
      return factory;
    };
    addCustomerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addCustomerService', addCustomerService);
  })();