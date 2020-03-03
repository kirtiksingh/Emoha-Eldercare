'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addCareManagerService'];
  var addCareManagerController = function ($scope,$rootScope,$location,$filter,addCareManagerService) {

    $scope.init = function(){
      $scope.date = null;
      $scope.datepickerOptions = {
        minDate: new Date('1890-01-01'),
        initDate: new Date()
      };
    };

    $scope.selectedgender={};
 $scope.gender = 
 [
   {
   "selected":false,
   "name":"Male",
  },
 {
   "selected":false,
   "name":"Female",
  },
  {
    "selected":false,
    "name":"Other",
   },

 ];
 $scope.selectedgender   =   $scope.gender[0]; 

 
 $scope.languages = [{
  selected:false,
  name: 'Hindi'
},
{
  selected:false,
  name: 'English'
}];

$scope.getCommunityData = function () {
   
  $scope.getCommunityManagerdata = {};
  addCareManagerService.getCommunityData().success(function (result) {
   
    if (result) {
    
      $scope.getCommunityManagerdata = result;
     
      angular.forEach($scope.getCommunityManagerdata, function (data) {
     
       $scope.getCommunityManagerdatavalue = data;
     
      })
     
    }
   
  });
};


$scope.addCareManagerdata = {
  crm_name:"",
  crm_mob:"",
  crm_alt_mob_no:"",
  crm_email:"",
  crm_address:"",
  crm_dob:"",
  crm_gender:"",
  crm_language:"",
  crm_education_1:"",
  crm_education_2:"",
  crm_education_3:"",
  comm_id:"",
  communitydataId:"",
  password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
  user_type:"caremanager",
  year1:"",
  year2:"",
  year3:"",
  university1:"",
  university2:"",
  university3:"",
}

$scope.addCareManager = function(){
  $scope.crm_name = $scope.addCareManagerdata.crm_name;
  $scope.crm_mob = "91" + $scope.addCareManagerdata.crm_mob;
  $scope.crm_alt_mob_no = "91" + $scope.addCareManagerdata.crm_alt_mob_no;
  $scope.crm_email = $scope.addCareManagerdata.crm_email;
  $scope.comm_id = $scope.addCareManagerdata.communitydataId.comm_id;
 
  $scope.crm_address = $scope.addCareManagerdata.crm_address + "," + $scope.addCareManagerdata.crm_address1;
  $scope.crm_dob = $filter('date')(new Date($scope.addCareManagerdata.crm_dob), "yyyy-MM-dd"); 
  $scope.addCareManagerdata.crm_gender = $scope.selectedgender.name; 
  $scope.crm_gender = $scope.addCareManagerdata.crm_gender;

  $scope.languageNameArray = [];
     
  angular.forEach($scope.languages, function(language){
  
    if (language.selected ==true) {   
     $scope.language1 = "";
     $scope.language2 = "";  
      $scope.languageNameArray.push(language.name);
      if($scope.languageNameArray[0]){
       $scope.language1 = $scope.languageNameArray[0] ; 
       $scope.crm_language = $scope.language1;
         if($scope.languageNameArray[1]){
           $scope.language2 = $scope.languageNameArray[1] ; 
       $scope.crm_language = $scope.language1 + "," + $scope.language2;
       
         }
         
      }
      
    }
  });
 $scope.languagedata = $scope.languageOther;
 if($scope.languagedata){
   $scope.crm_language = $scope.languagedata;
 }
 
  // $scope.nurse_language = $scope.addNursedata.nurse_language;
  $scope.crm_education_1 = $scope.addCareManagerdata.crm_education_1 + "," + $scope.addCareManagerdata.year1 +"," + $scope.addCareManagerdata.university1;
  $scope.crm_education_2 = $scope.addCareManagerdata.crm_education_2 + "," + $scope.addCareManagerdata.year2 +"," + $scope.addCareManagerdata.university2;
  $scope.crm_education_3 = $scope.addCareManagerdata.crm_education_3 + "," + $scope.addCareManagerdata.year3 +"," + $scope.addCareManagerdata.university3;
  $scope.password = $scope.addCareManagerdata.password;
  $scope.user_type = $scope.addCareManagerdata.user_type;
   
  addCareManagerService.addCareManager($scope.crm_name,$scope.crm_mob,$scope.crm_alt_mob_no,$scope.comm_id,$scope.crm_email,$scope.crm_address,$scope.crm_dob,$scope.crm_gender,$scope.crm_language,$scope.crm_education_1,$scope.crm_education_2,$scope.crm_education_3,$scope.password,$scope.user_type).success(function (result) {
        
    if (result) {
        alert(result);
     
    }
    else 
    {
      alert("error");
    }
   
  });
};
    };

    addCareManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCareManagerController', addCareManagerController)
  })();