'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addCustomerService'];
  var addCustomerController = function ($scope,$rootScope,$location,$filter,addCustomerService) {

$scope.getCommunityData = function () {
  $scope.getCommunityManagerdata = {};
  addCustomerService.getCommunityData().success(function (result) {
    if (result) {
      $scope.getCommunityManagerdata = result;
      angular.forEach($scope.getCommunityManagerdata, function (data) {
       $scope.getCommunityManagerdatavalue = data;
      })
    }
  });
};
 
$scope.homecare_reg = {
  user_name: "",
  mobile_number: "",
  prefered_name: null,
  user_type: "customer",
  alert_mob: "",
  regn_type: null,
  pri_emg_name:"",
  pri_emg_mob:"",
  comm_id:"",
  datetime:""
}
$scope.personal_details = {
  user_email: "",
  cust_code:"",
  cust_address: "",
  cust_community:null,
  cust_geolocation:"",
  cust_height: null,
  cust_weight: null,
  cust_category: null,
  cust_language: null,
  cust_dob: "",
  cust_gender: null,
  cust_marital_status: null,
  cust_dom: null,
  cust_religion: null,
  cust_living_place:null,
  cust_living_situation: null,
  cust_staying_with: null,
  cust_family_member_1: "",
  cust_family_member_2: "",
  cust_family_member_3: "",
  cust_education_1: "",
  cust_education_2: "",
  cust_education_3: "",
  cust_asset_1: "",
  cust_asset_2: "",
  cust_asset_3: "",
  cust_risk_assessment_1: "",
  cust_risk_assessment_2: "",
  cust_risk_assessment_3: "",
  cust_risk_assessment_4: "",
  cust_risk_assessment_5: ""
}
$scope.addCustomer = function(){
   $scope.homecare_reg.user_name = $scope.user_name;
   $scope.homecare_reg.mobile_number = $scope.mobile_number;
   $scope.homecare_reg.prefered_name = null;
   $scope.homecare_reg.user_type = "customer";
   $scope.homecare_reg.alert_mob = $scope.alert_mob;
  //  $scope.homecare_reg.regn_type = null;
   $scope.homecare_reg.pri_emg_name = $scope.pri_emg_name;
   $scope.homecare_reg.pri_emg_mob = $scope.pri_emg_mob;
   $scope.homecare_reg.comm_id = $scope.addCareManagerdata.communitydataId.comm_id;
   $scope.homecare_reg.datetime = $filter('date')(new Date(), "yyyy-MM-dd");
   $scope.personal_details.user_email = $scope.user_email;
   $scope.personal_details.cust_code = $scope.cust_code;
   $scope.personal_details.cust_address = $scope.cust_address;
   $scope.personal_details.cust_community = null;
   $scope.personal_details.cust_geolocation = "";
   $scope.personal_details.cust_height = null;
   $scope.personal_details.cust_weight = null;
   $scope.personal_details.cust_category = null;
   $scope.personal_details.cust_language = null;
   $scope.personal_details.cust_dob = "";
   $scope.personal_details.cust_gender = null;
   $scope.personal_details.cust_marital_status = null;
   $scope.personal_details.cust_dom = null;
   $scope.personal_details.cust_religion = null;
   $scope.personal_details.cust_living_place = null;
   $scope.personal_details.cust_living_situation = null;
   $scope.personal_details.cust_staying_with = null;
   $scope.personal_details.cust_family_member_1 = "";
   $scope.personal_details.cust_family_member_2 = "";
   $scope.personal_details.cust_family_member_3 = "";
   $scope.personal_details.cust_education_1 = "";
   $scope.personal_details.cust_education_2 = "";
   $scope.personal_details.cust_education_3 = "";
   $scope.personal_details.cust_asset_1 = "";
   $scope.personal_details.cust_asset_2 = "";
   $scope.personal_details.cust_asset_3 = "";
   $scope.personal_details.cust_risk_assessment_1 = "";
   $scope.personal_details.cust_risk_assessment_2 = "";
   $scope.personal_details.cust_risk_assessment_3 = "";
   $scope.personal_details.cust_risk_assessment_4 = "";
   $scope.personal_details.cust_risk_assessment_5 = "";
   addCustomerService.addCustomer($scope.homecare_reg.user_name,$scope.homecare_reg.mobile_number,$scope.homecare_reg.prefered_name,$scope.homecare_reg.user_type,$scope.homecare_reg.alert_mob,$scope.homecare_reg.pri_emg_name,$scope.homecare_reg.pri_emg_mob,$scope.homecare_reg.comm_id,$scope.homecare_reg.datetime,$scope.personal_details.user_email,$scope.personal_details.cust_code,$scope.personal_details.cust_address,$scope.personal_details.cust_community,$scope.personal_details.cust_geolocation, $scope.personal_details.cust_height,$scope.personal_details.cust_weight,$scope.personal_details.cust_category,$scope.personal_details.cust_language,$scope.personal_details.cust_dob,$scope.personal_details.cust_gender,$scope.personal_details.cust_marital_status,$scope.personal_details.cust_dom,$scope.personal_details.cust_religion,$scope.personal_details.cust_living_place,$scope.personal_details.cust_staying_with,$scope.personal_details.cust_family_member_1, $scope.personal_details.cust_family_member_2, $scope.personal_details.cust_family_member_3,$scope.personal_details.cust_education_1,$scope.personal_details.cust_education_2,$scope.personal_details.cust_education_3,$scope.personal_details.cust_risk_assessment_1,$scope.personal_details.cust_risk_assessment_2,$scope.personal_details.cust_risk_assessment_3,$scope.personal_details.cust_risk_assessment_4,$scope.personal_details.cust_risk_assessment_5).success(function (result) {
    if (result) {
      $scope.getcustomerDataValue = result;
      window.location = '/customer/' ;
    }
  });
};
 };

    addCustomerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCustomerController',addCustomerController)
  })();