'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addAttendentService'];
  var addAttendentController = function ($scope,$rootScope,$location,$filter,addAttendentService) {

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

$scope.shifts = [{
  selected:false,
  name: 'Morning'
},
{
  selected:false,
  name: 'Evening'
},
{
  selected:false,
  name: 'Night'
}
];

$scope.selecteddutyhour={};
$scope.dutyhours = 
[
  {
  "selected":false,
  "name":"4",
 },
{
  "selected":false,
  "name":"6",
 },
 {
   "selected":false,
   "name":"8",
  },

];
$scope.selecteddutyhour   =   $scope.dutyhours[0]; 

$scope.getClusterData = function () {
   
  $scope.getClusterManagerdata = {};
  addAttendentService.getClusterData().success(function (result) {
   
    if (result) {
    
      $scope.getClusterManagerdata = result;
     
      angular.forEach($scope.getClusterManagerdata, function (data) {
     
       $scope.getClusterManagerdatavalue = data;
     
      })
     
    }
   
  });
};

$scope.addAttendentdata = {
  attd_name:"",
  attd_mob:"",
  attd_alt_mob_no:"",
  attd_email:"",
  cluster_id:"",
  attd_address:"",
  attd_dob:"",
  attd_gender:"",
  attd_language:"",
  attd_education_1:"",
  attd_education_2:"",
  attd_education_3:"",
  attd_duty_hrs:"",
  attd_shift:"",
  password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
  user_type:"attendent",
  clusterData:"",
  year1:"",
  year2:"",
  year3:"",
  university1:"",
  university2:"",
  university3:"",
}

$scope.addAttendent = function(){
  $scope.attd_name = $scope.addAttendentdata.attd_name;
  $scope.attd_mob = "91" + $scope.addAttendentdata.attd_mob;
  $scope.attd_alt_mob_no = "91" + $scope.addAttendentdata.attd_alt_mob_no;
  $scope.attd_email = $scope.addAttendentdata.attd_email;
  $scope.cluster_id = $scope.addAttendentdata.clusterData.cluster_id;
  $scope.attd_address = $scope.addAttendentdata.attd_address + "," + $scope.addAttendentdata.attd_address1;
  $scope.attd_dob = $filter('date')(new Date($scope.addAttendentdata.attd_dob), "yyyy-MM-dd"); 
  $scope.addAttendentdata.attd_gender = $scope.selectedgender.name; 
  $scope.attd_gender = $scope.addAttendentdata.attd_gender;

  $scope.languageNameArray = [];
     
  angular.forEach($scope.languages, function(language){
  
    if (language.selected ==true) {   
     $scope.language1 = "";
     $scope.language2 = "";  
      $scope.languageNameArray.push(language.name);
      if($scope.languageNameArray[0]){
       $scope.language1 = $scope.languageNameArray[0] ; 
       $scope.attd_language = $scope.language1;
         if($scope.languageNameArray[1]){
           $scope.language2 = $scope.languageNameArray[1] ; 
       $scope.attd_language = $scope.language1 + "," + $scope.language2;
       
         }
         
      }
      
    }
  });
 $scope.languagedata = $scope.languageOther;
 if($scope.languagedata){
   $scope.attd_language = $scope.languagedata;
 }
 
  // $scope.nurse_language = $scope.addNursedata.nurse_language;
  $scope.attd_education_1 = $scope.addAttendentdata.attd_education_1 + "," + $scope.addAttendentdata.year1 +"," + $scope.addAttendentdata.university1;
  $scope.attd_education_2 = $scope.addAttendentdata.attd_education_2 + "," + $scope.addAttendentdata.year2 +"," + $scope.addAttendentdata.university2;
  $scope.attd_education_3 = $scope.addAttendentdata.attd_education_3 + "," + $scope.addAttendentdata.year3 +"," + $scope.addAttendentdata.university3;
  $scope.addAttendentdata.attd_duty_hrs =  $scope.selecteddutyhour.name;
  $scope.attd_duty_hrs = $scope.addAttendentdata.attd_duty_hrs;
  $scope.password = $scope.addAttendentdata.password;
  $scope.user_type = $scope.addAttendentdata.user_type;
 
  $scope.shiftNameArray = [];
     
  angular.forEach($scope.shifts, function(shift){
  
    if (shift.selected ==true) {   
     $scope.shift1 = "";
     $scope.shift2 = ""; 
     $scope.shift3 = "";  
      $scope.shiftNameArray.push(shift.name);
      if($scope.shiftNameArray[0]){
       $scope.shift1 = $scope.shiftNameArray[0] ; 
       $scope.attd_shift = $scope.shift1;
         if($scope.shiftNameArray[1]){
           $scope.shift2 = $scope.shiftNameArray[1] ; 
       $scope.attd_shift = $scope.shift1 + "," + $scope.shift2;
       
         }
         if($scope.shiftNameArray[2]){
          $scope.shift3 = $scope.shiftNameArray[2] ; 
      $scope.attd_shift = $scope.shift1 + "," + $scope.shift2 + "," + $scope.shift3;
      
        }
         
      }
      
    }
  });
    
  addAttendentService.addAttendent($scope.attd_name,$scope.attd_mob,$scope.attd_alt_mob_no, $scope.attd_email,$scope.cluster_id,$scope.attd_address,$scope.attd_dob,$scope.attd_gender,$scope.attd_language,$scope.attd_education_1,$scope.attd_education_2,$scope.attd_education_3,$scope.attd_duty_hrs,$scope.attd_shift,$scope.password,$scope.user_type).success(function (result) {
        
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

    addAttendentController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addAttendentController', addAttendentController)
  })();