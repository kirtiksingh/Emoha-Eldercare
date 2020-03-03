'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addNurseService'];
  var addNurseController = function ($scope,$rootScope,$location,$filter,addNurseService) {

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

$scope.addNursedata = {
  nurse_name:"",
  nurse_mob:"",
  nurse_alt_mob_no:"",
  nurse_email:"",
  nurse_address:"",
  nurse_dob:"",
  nurse_gender:"",
  nurse_language:"",
  nurse_education_1:"",
  nurse_education_2:"",
  nurse_education_3:"",
  nurse_duty_hrs:"",
  nurse_shift:"",
  cluster_id:"",
  password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
  user_type:"nurse",
  clusterData:"",
  year1:"",
  year2:"",
  year3:"",
  university1:"",
  university2:"",
  university3:"",
}

$scope.addNurse = function(){
  $scope.nurse_name = $scope.addNursedata.nurse_name;
  $scope.nurse_mob = "+91" + $scope.addNursedata.nurse_mob;
  $scope.nurse_alt_mob_no = "+91" + $scope.addNursedata.nurse_alt_mob_no;
  $scope.nurse_email = $scope.addNursedata.nurse_email;
  $scope.cluster_id = $scope.addNursedata.clusterData.cluster_id;
  $scope.nurse_address = $scope.addNursedata.nurse_address + "," + $scope.addNursedata.nurse_address1;
  $scope.nurse_dob = $filter('date')(new Date($scope.addNursedata.nurse_dob), "yyyy-MM-dd"); 
  $scope.addNursedata.nurse_gender = $scope.selectedgender.name; 
  $scope.nurse_gender = $scope.addNursedata.nurse_gender;

  $scope.languageNameArray = [];
     
  angular.forEach($scope.languages, function(language){
  
    if (language.selected ==true) {   
     $scope.language1 = "";
     $scope.language2 = "";  
      $scope.languageNameArray.push(language.name);
      if($scope.languageNameArray[0]){
       $scope.language1 = $scope.languageNameArray[0] ; 
       $scope.nurse_language = $scope.language1;
         if($scope.languageNameArray[1]){
           $scope.language2 = $scope.languageNameArray[1] ; 
       $scope.nurse_language = $scope.language1 + "," + $scope.language2;
       
         }
         
      }
      
    }
  });
 $scope.languagedata = $scope.languageOther;
 if($scope.languagedata){
   $scope.nurse_language = $scope.languagedata;
 }
 
  // $scope.nurse_language = $scope.addNursedata.nurse_language;
  $scope.nurse_education_1 = $scope.addNursedata.nurse_education_1 + "," + $scope.addNursedata.year1 +"," + $scope.addNursedata.university1;
  $scope.nurse_education_2 = $scope.addNursedata.nurse_education_2 + "," + $scope.addNursedata.year2 +"," + $scope.addNursedata.university2;
  $scope.nurse_education_3 = $scope.addNursedata.nurse_education_3 + "," + $scope.addNursedata.year3 +"," + $scope.addNursedata.university3;
  $scope.addNursedata.nurse_duty_hrs =  $scope.selecteddutyhour.name;
  $scope.nurse_duty_hrs = $scope.addNursedata.nurse_duty_hrs;
  $scope.password = $scope.addNursedata.password;
  $scope.user_type = $scope.addNursedata.user_type;
 
  $scope.shiftNameArray = [];
     
  angular.forEach($scope.shifts, function(shift){
  
    if (shift.selected ==true) {   
     $scope.shift1 = "";
     $scope.shift2 = ""; 
     $scope.shift3 = "";  
      $scope.shiftNameArray.push(shift.name);
      if($scope.shiftNameArray[0]){
       $scope.shift1 = $scope.shiftNameArray[0] ; 
       $scope.nurse_shift = $scope.shift1;
         if($scope.shiftNameArray[1]){
           $scope.shift2 = $scope.shiftNameArray[1] ; 
       $scope.nurse_shift = $scope.shift1 + "," + $scope.shift2;
       
         }
         if($scope.shiftNameArray[2]){
          $scope.shift3 = $scope.shiftNameArray[2] ; 
      $scope.nurse_shift = $scope.shift1 + "," + $scope.shift2 + "," + $scope.shift3;
      
        }
         
      }
      
    }
  });
    
  addNurseService.addNurse($scope.nurse_name,$scope.nurse_mob,$scope.nurse_alt_mob_no, $scope.nurse_email, $scope.cluster_id,$scope.nurse_address,$scope.nurse_dob,$scope.nurse_gender,$scope.nurse_language,$scope.nurse_education_1,$scope.nurse_education_2,$scope.nurse_education_3,$scope.nurse_duty_hrs,$scope.nurse_shift,$scope.password,$scope.user_type).success(function (result) {
        
    if (result) {
        alert(result);
     
    }
    else 
    {
      alert("error");
    }
   
  });
};

$scope.getClusterData = function () {
   
  $scope.getClusterManagerdata = {};
  addNurseService.getClusterData().success(function (result) {
   
    if (result) {
    
      $scope.getClusterManagerdata = result;
     
      angular.forEach($scope.getClusterManagerdata, function (data) {
     
       $scope.getClusterManagerdatavalue = data;
     
      })
     
    }
   
  });
};

    };

    addNurseController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addNurseController', addNurseController)
  })();