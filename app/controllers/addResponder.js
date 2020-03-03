'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addResponderService'];
  var addResponderController = function ($scope,$rootScope,$location,$filter,addResponderService) {

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
  addResponderService.getCommunityData().success(function (result) {
   
    if (result) {
    
      $scope.getCommunityManagerdata = result;
     
      angular.forEach($scope.getCommunityManagerdata, function (data) {
     
       $scope.getCommunityManagerdatavalue = data;
     
      })
     
    }
   
  });
};


$scope.addResponderdata = {
  rsp_name:"",
  res_mob:"",
  comm_id:"",
  rsp_alt_mob_no:"",
  rsp_email:"",
  rsp_address:"",
  rsp_dob:"",
  rsp_gender:"",
  rsp_language:"",
  rsp_education_1:"",
  rsp_education_2:"",
  rsp_education_3:"",
  communitydataId:"",
  password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
  user_type:"responder",
  year1:"",
  year2:"",
  year3:"",
  university1:"",
  university2:"",
  university3:"",
 
}


$scope.addResponder = function(){
  $scope.rsp_name = $scope.addResponderdata.rsp_name;
 
  $scope.res_mob = "91" + $scope.addResponderdata.ccd_mob;
  $scope.rsp_alt_mob_no = "91" + $scope.addResponderdata.rsp_alt_mob_no;
  $scope.rsp_email = $scope.addResponderdata.rsp_email;
  $scope.comm_id = $scope.addResponderdata.communitydataId.comm_id;
 
  $scope.rsp_address = $scope.addResponderdata.rsp_address + "," + $scope.addResponderdata.rsp_address1;
  $scope.rsp_dob = $filter('date')(new Date($scope.addResponderdata.rsp_dob), "yyyy-MM-dd"); 
  $scope.addResponderdata.rsp_gender = $scope.selectedgender.name; 
  $scope.rsp_gender = $scope.addResponderdata.rsp_gender;

  $scope.languageNameArray = [];
     
  angular.forEach($scope.languages, function(language){
  
    if (language.selected ==true) {   
     $scope.language1 = "";
     $scope.language2 = "";  
      $scope.languageNameArray.push(language.name);
      if($scope.languageNameArray[0]){
       $scope.language1 = $scope.languageNameArray[0] ; 
       $scope.rsp_language = $scope.language1;
         if($scope.languageNameArray[1]){
           $scope.language2 = $scope.languageNameArray[1] ; 
       $scope.rsp_language = $scope.language1 + "," + $scope.language2;
       
         }
         
      }
      
    }
  });
 $scope.languagedata = $scope.languageOther;
 if($scope.languagedata){
   $scope.rsp_language = $scope.languagedata;
 }
 
  // $scope.nurse_language = $scope.addNursedata.nurse_language;
  $scope.rsp_education_1 = $scope.addResponderdata.rsp_education_1 + "," + $scope.addResponderdata.year1 +"," + $scope.addResponderdata.university1;
  $scope.rsp_education_2 = $scope.addResponderdata.rsp_education_2 + "," + $scope.addResponderdata.year2 +"," + $scope.addResponderdata.university2;
  $scope.rsp_education_3 = $scope.addResponderdata.rsp_education_3 + "," + $scope.addResponderdata.year3 +"," + $scope.addResponderdata.university3;
  $scope.password = $scope.addResponderdata.password;
  $scope.user_type = $scope.addResponderdata.user_type;
 
  addResponderService.addResponder($scope.rsp_name,$scope.res_mob,$scope.rsp_alt_mob_no, $scope.rsp_email,$scope.comm_id,$scope.rsp_address,$scope.rsp_dob,$scope.rsp_gender,$scope.rsp_language,$scope.rsp_education_1,$scope.rsp_education_2,$scope.rsp_education_3,$scope.password,$scope.user_type).success(function (result) {
        
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

    addResponderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addResponderController', addResponderController)
  })();