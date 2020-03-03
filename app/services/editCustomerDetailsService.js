/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var editCustomerDetailsService = function ($http,$rootScope) {
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

    factory.customerId = function (customerId) {
     
      return $http.get("http://13.233.7.113:5000/api/customer/details/all/" + customerId)
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
    factory.personalupdate = function (prefered_name,cust_id,user_email,cust_address,cust_community,cust_geolocation,cust_height,cust_weight,cust_language,cust_dob,cust_gender,cust_marital_status,cust_dom,cust_category,cust_staying_with,cust_family_member_1,cust_family_member_2,cust_family_member_3,cust_education_1,cust_education_2,cust_education_3,cust_asset_1,cust_asset_2,cust_asset_3,cust_religion,cust_living_situation,cust_risk_assessment_1,cust_risk_assessment_2,cust_risk_assessment_3,cust_risk_assessment_4,cust_risk_assessment_5) {
      var serviceInput = {};
      
      serviceInput.prefered_name = prefered_name;
      serviceInput.cust_id = cust_id;
      serviceInput.user_email = user_email;
      serviceInput.cust_address = cust_address;
      serviceInput.cust_community = cust_community;
      serviceInput.cust_geolocation = cust_geolocation;
      serviceInput.cust_height = cust_height;
      serviceInput.cust_weight = cust_weight;
      serviceInput.cust_language = cust_language;
      serviceInput.cust_dob = cust_dob;
      serviceInput.cust_gender = cust_gender;
      serviceInput.cust_marital_status = cust_marital_status;
      serviceInput.cust_dom = cust_dom;
      serviceInput.cust_category = cust_category;
      // serviceInput.cust_living_place = cust_living_place;
      serviceInput.cust_staying_with = cust_staying_with;
      serviceInput.cust_family_member_1 = cust_family_member_1;
      serviceInput.cust_family_member_2 = cust_family_member_2;
      serviceInput.cust_family_member_3 = cust_family_member_3;
      serviceInput.cust_education_1 = cust_education_1;
      serviceInput.cust_education_2 = cust_education_2;
      serviceInput.cust_education_3 = cust_education_3;
      serviceInput.cust_asset_1 = cust_asset_1;
      serviceInput.cust_asset_2 = cust_asset_2;
      serviceInput.cust_asset_3 = cust_asset_3;
      serviceInput.cust_religion = cust_religion;
      serviceInput.cust_living_situation = cust_living_situation;
      serviceInput.cust_risk_assessment_1 = cust_risk_assessment_1;
      serviceInput.cust_risk_assessment_2 = cust_risk_assessment_2;
      serviceInput.cust_risk_assessment_3 = cust_risk_assessment_3;
      serviceInput.cust_risk_assessment_4 = cust_risk_assessment_4;
      serviceInput.cust_risk_assessment_5 = cust_risk_assessment_5;
      return $http.post("http://13.233.7.113:5000/api/put/personal_details/" + cust_id,serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Updated successfully');
        });
    };
      return factory;
    };
    editCustomerDetailsService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('editCustomerDetailsService', editCustomerDetailsService);
  })();