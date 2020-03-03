'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$timeout','$filter','homeCareRegistrationService'];
  var homeCareRegistrationController = function ($scope,$rootScope,$location,$timeout,$filter,homeCareRegistrationService) {

    $scope.init = function(){
      $scope.date = null;
      $scope.datepickerOptions = {
        minDate: new Date('2010-05-01'),
        initDate: new Date()
      };
     
    };

    $scope.selectedstate = {};
    $scope.selectedcountry = {};
    $scope.selectedcommunity = {};
    $scope.selectedcustomercategory = {};

    $scope.communities = 
    [
      {
      "selected":false,
      "name":"gurgaon",
     },
    {
      "selected":false,
      "name":"Delhi",
     },
   
    ];
    $scope.selectedcommunity   =   $scope.communities[0]; 

    $scope.selectedusernamedata = {};
    $scope.usernamedata = 
    [
      {
      "selected":false,
      "name":"Mr.",
     },
    {
      "selected":false,
      "name":"Mrs.",
     },
     {
      "selected":false,
      "name":"Ms.",
     },
     {
      "selected":false,
      "name":"Dr.",
     },
    ];
    $scope.selectedusernamedata   =   $scope.usernamedata[0]; 

    
    // $scope.customercategory = 
    // [
    //   {
    //   "selected":false,
    //   "name":"VIP",
    //  },
    // {
    //   "selected":false,
    //   "name":"NRI",
    //  },
   
    // ];
    // $scope.selectedcustomercategory   =   $scope.customercategory[0]; 



    $scope.countries = 
 [
   {
   "selected":false,
   "name":"India",
  },
 {
   "selected":false,
   "name":"UK",
  },

 ];
 $scope.selectedcountry   =   $scope.countries[0];  
 
 $scope.states = 
 [
   {
   "selected":false,
   "name":"Delhi",
  },
 {
   "selected":false,
   "name":"UP",
  },
  {
    "selected":false,
    "name":"Harayana",
   },
   {
    "selected":false,
    "name":"Punjab",
   },
   {
    "selected":false,
    "name":"Rajasthan",
   },
   {
    "selected":false,
    "name":"Bihar",
   },
   {
    "selected":false,
    "name":"Uttrakhand",
   },
   {
    "selected":false,
    "name":"Himachal Predesh",
   },
   {
    "selected":false,
    "name":"J & K",
   },
   {
    "selected":false,
    "name":"Sikkim",
   },
   {
    "selected":false,
    "name":"Gujarat",
   },
   {
    "selected":false,
    "name":"Madhaya Pradesh",
   },
   {
    "selected":false,
    "name":"Arunachal Pradesh",
   },
   {
    "selected":false,
    "name":"Assam",
   },
   {
    "selected":false,
    "name":"Nagaland",
   },
   {
    "selected":false,
    "name":"Mizoram",
   },
   {
    "selected":false,
    "name":"Manipur",
   },
   {
    "selected":false,
    "name":"Meghalaya",
   },
   {
    "selected":false,
    "name":"West Bengal",
   },
   {
    "selected":false,
    "name":"Jharkhand",
   },
   {
    "selected":false,
    "name":"Odisha",
   },
   {
    "selected":false,
    "name":"Chattisgarh",
   },
   {
    "selected":false,
    "name":"Madhaya Pradesh",
   },
   {
    "selected":false,
    "name":"Maharashtra",
   },
   {
    "selected":false,
    "name":"Karnataka",
   },
   {
    "selected":false,
    "name":"Telangana",
   },
   {
    "selected":false,
    "name":"Andhra Pradesh",
   },
   {
    "selected":false,
    "name":"Tamil Nadu",
   },
   {
    "selected":false,
    "name":"Kerala",
   },
   
   
 ];
 $scope.selectedstate   =   $scope.states[0];  
 
 $scope.selectedgender = {};

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

 $scope.selectedmaritalstatus = {};

 $scope.maritalstatus = 
 [
   {
   "selected":false,
   "name":"Married",
  },
 {
   "selected":false,
   "name":"Single",
  },
  {
    "selected":false,
    "name":"Widow",
   },
   {
    "selected":false,
    "name":"Widower",
   },
   {
    "selected":false,
    "name":"Divorced",
   },
   {
    "selected":false,
    "name":"Seperated",
   },

 ];
 $scope.selectedmaritalstatus   =   $scope.maritalstatus[0]; 

 $scope.selectedlivingplace = {};

 $scope.livingplace = 
 [
   {
   "selected":false,
   "name":"Own House",
  },
 {
   "selected":false,
   "name":"Rented",
  },
  

 ];
 $scope.selectedlivingplace   =   $scope.livingplace[0]; 

 
 $scope.selectedstayingwith = {};

 $scope.stayingwith = 
 [
   {
   "selected":false,
   "name":"0",
  },
 {
   "selected":false,
   "name":"1",
  },
  {
    "selected":false,
    "name":"2",
   },
   {
    "selected":false,
    "name":"3",
   },
   {
    "selected":false,
    "name":"4",
   },
   {
    "selected":false,
    "name":"5",
   },
   {
    "selected":false,
    "name":"6",
   },
   {
    "selected":false,
    "name":"7",
   },
   {
    "selected":false,
    "name":"8",
   },
   {
    "selected":false,
    "name":"9",
   },
   {
    "selected":false,
    "name":"10",
   },
  

 ];
 $scope.selectedstayingwith   =   $scope.stayingwith[0]; 

 $scope.selectedassets1 = {};

 $scope.assets1 = 
 [
   {
   "selected":false,
   "name":"Home",
  },
 {
   "selected":false,
   "name":"Car",
  },
  {
    "selected":false,
    "name":"Land",
   },
  

 ];
 $scope.selectedassets1   =   $scope.assets1[0]; 

 $scope.selectedassets2 = {};

 $scope.assets2 = 
 [
   {
   "selected":false,
   "name":"House",
  },
 {
   "selected":false,
   "name":"Car",
  },
  {
    "selected":false,
    "name":"Land",
   },
  

 ];
 $scope.selectedassets2   =   $scope.assets2[0]; 

 $scope.selectedassets3 = {};

 $scope.assets3 = 
 [
   {
   "selected":false,
   "name":"House",
  },
 {
   "selected":false,
   "name":"Car",
  },
  {
    "selected":false,
    "name":"Land",
   },
  

 ];
 $scope.selectedassets3   =   $scope.assets3[0]; 


 $scope.preferredlanguage = [{
  selected:false,
  name: 'Hindi'
},
{
  selected:false,
  name: 'Urdu'
},
{
  selected:false,
  name: 'English'
},
{
  selected:false,
  name: 'Punjabi'
},
{
  selected:false,
  name: 'Bengali'
},
{
  selected:false,
  name: 'Gujrati'
},
{
  selected:false,
  name: 'Malayalam'
},
{
  selected:false,
  name: 'telugu'
},
{
  selected:false,
  name: 'Tamil'
}
];


$scope.religiouspreference = [{
  selected:false,
  name: 'Atheist/Agnostic'
},
{
  selected:false,
  name: 'Buddhism'
},
{
  selected:false,
  name: 'Christianity'
},
{
  selected:false,
  name: 'Hinduism'
},
{
  selected:false,
  name: 'Islam'
},
{
  selected:false,
  name: 'Jainism'
},
{
  selected:false,
  name: 'Sikhism'
},

];


$scope.livingsituation = [{
  selected:false,
  name: 'Alone'
},
{
  selected:false,
  name: 'Spouse'
},
{
  selected:false,
  name: 'Son'
},
{
  selected:false,
  name: 'Daughter'
},
{
  selected:false,
  name: 'Helper'
}

];

$scope.mobilitydevices = [{
  selected:false,
  name: 'Cane/Crutch'
},
{
  selected:false,
  name: 'Walker'
},
{
  selected:false,
  name: 'Orthotics/Prosthetics'
},
{
  selected:false,
  name: 'Wheelchair(Full Time)'
},
{
  selected:false,
  name: 'Wheelchair(Part Time)'
}
];

$scope.specialdiet = [{
  selected:false,
  name: 'Pureed Food'
},
{
  selected:false,
  name: 'Mechanical Soft'
},
{
  selected:false,
  name: 'Thickened liquids'
},
{
  selected:false,
  name: 'Ryles tube /Tube feeding'
},
{
  selected:false,
  name: 'Low Sodium'
},
{
  selected:false,
  name: 'Diabetic diet'
},
];

$scope.medicalequipment = [{
  selected:false,
  name: 'Nebulizer'
},
{
  selected:false,
  name: 'Oxygen'
},
{
  selected:false,
  name: 'Hospital Beds'
},
{
  selected:false,
  name: 'Ventilator'
},
{
  selected:false,
  name: 'Infusion equipment'
},
{
  selected:false,
  name: 'Nasogastric tube'
},
{
  selected:false,
  name: 'Ryles tube'
},
{
  selected:false,
  name: 'PEG tube'
},
{
  selected:false,
  name: 'Trach tube with suctioning'
}
];


$scope.needofmedicalequipment = [{
  selected:false,
  name: 'Cane/Crutch'
},
{
  selected:false,
  name: 'Walker'
},
{
  selected:false,
  name: 'Orthotics/Prosthetics'
},
{
  selected:false,
  name: 'Wheelchair(Full Time)'
},
{
  selected:false,
  name: 'Wheelchair(Part Time)'
},
{
  selected:false,
  name: 'Nebulizer'
},
{
  selected:false,
  name: 'Oxygen'
},
{
  selected:false,
  name: 'Hospital Beds'
},
{
  selected:false,
  name: 'Ventilator'
},
{
  selected:false,
  name: 'Infusion Equipment'
},
{
  selected:false,
  name: 'Nasogastric tube'
},
{
  selected:false,
  name: 'Ryles tube'
},
{
  selected:false,
  name: 'PEG tube'
}

];

$scope.medicaldiagnosis = [{
  selected:false,
  name: 'Hypertension'
},
{
  selected:false,
  name: 'High Cholesterol'
},
{
  selected:false,
  name: 'Diabetes'
},
{
  selected:false,
  name: 'Alzheimers Disease'
},
{
  selected:false,
  name: 'Lewy Body Dementia'
},
{
  selected:false,
  name: 'Fronto-Temporal Dementia'
},
{
  selected:false,
  name: 'Vascular Dementia'
},
{
  selected:false,
  name: 'Dementia'
},
{
  selected:false,
  name: 'Cancer'
},
{
  selected:false,
  name: 'Asthma'
},
{
  selected:false,
  name: 'Arthritis'
},
{
  selected:false,
  name: 'Coronary Artery Disease'
},
{
  selected:false,
  name: 'Heart Disease'
},
{
  selected:false,
  name: 'HIV/AIDS'
},
{
  selected:false,
  name: 'Osteoporosis'
},
{
  selected:false,
  name: 'Parkinsons Disease'
},
{
  selected:false,
  name: 'Schizophrenia'
},
{
  selected:false,
  name: 'Depression'
},
{
  selected:false,
  name: 'Other mental health condition'
},


];

   
    $scope.isActive = function(route) {
      return route === $location.path();
  }

    $scope.clicked = function(){
      alert("Confirm Registration");
  };
  
  $scope.homecare_reg = {
    user_name : "",
    mobile_number : "",
    prefered_name: "",
    user_type: "customer",
    password: "$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
    
  };

  $scope.personal_details ={
    user_email: "dfdf@d.com",
    cust_email: "",
    cust_address:"",
    cust_community:"",
    cust_geolocation:"testloc",
    cust_category:"",
    cust_language:"",
    cust_dob: "",
    cust_gender: "",
    cust_marital_status: "",
    cust_dom : "",
    cust_religion: "",
    cust_living_place: "",
    cust_living_situation: "",
    cust_staying_with: "",
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
    cust_risk_assessment_5: "",
    state : "",
    country : "",
    city : "",
    // pincode : "",
    community :"",
  };

  $scope.register = function () { 
    $scope.usernamevalue = $scope.selectedusernamedata.name;
   $scope.user_name = $scope.usernamevalue + $scope.homecare_reg.user_name;
   $scope.homecare_reg.mobile_number = "+91" + $scope.mobile_number;
   $scope.prefered_name = $scope.homecare_reg.prefered_name;
   $scope.user_type = $scope.homecare_reg.user_type;
   $scope.password = $scope.homecare_reg.password;
   $scope.user_email = $scope.personal_details.user_email;
   $scope.cust_email = $scope.personal_details.cust_email;
   $scope.state = $scope.selectedstate.name; 
   $scope.country = $scope.selectedcountry.name; 
  //  $scope.pincode = $scope.personal_details.pincode;
   $scope.personal_details.cust_address = $scope.cust_address1 +" ," + $scope.cust_address2 + "," + $scope.country + "," + $scope.state + "," + $scope.personal_details.city  ;
   $scope.personal_details.cust_community = $scope.selectedcommunity.name; 
   $scope.cust_community = $scope.personal_details.cust_community ;
   $scope.cust_geolocation = $scope.personal_details.cust_geolocation;
   $scope.personal_details.cust_category = $scope.selectedcustomercategory.name; 
   $scope.cust_category = $scope.personal_details.cust_category;

  //  $scope.cust_language = $scope.personal_details.cust_language;

   $scope.languageDataArray = [];
     
   angular.forEach($scope.preferredlanguage, function(languagedata){
   
     if (languagedata.selected ==true) {   
      $scope.language1 = "";
      $scope.language2 = ""; 
      $scope.language3 = "";
      $scope.language4 = "";
      $scope.language5 = "";
      $scope.language6 = "";
      $scope.language7 = "";
      $scope.language8 = "";
      $scope.language9 = "";
       $scope.languageDataArray.push(languagedata.name);
       if($scope.languageDataArray[0]){
        $scope.language1 = $scope.languageDataArray[0] ; 
        $scope.personal_details.cust_language = $scope.language1;
          if($scope.languageDataArray[1]){
            $scope.language2 = $scope.languageDataArray[1] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2;
          }
          if($scope.languageDataArray[2]){
            $scope.language3 = $scope.languageDataArray[2] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2 + "," + $scope.language3;
        
          }
          if($scope.languageDataArray[3]){
            $scope.language4 = $scope.languageDataArray[3] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2 + "," + $scope.language3 + "," + $scope.language4;
        
          }
          if($scope.languageDataArray[4]){
            $scope.language5 = $scope.languageDataArray[4] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2 + "," + $scope.language3 + "," + $scope.language4 + "," + $scope.language5;
        
          }
          if($scope.languageDataArray[5]){
            $scope.language6 = $scope.languageDataArray[5] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2 + "," + $scope.language3 + "," + $scope.language4 + "," + $scope.language5 + "," + $scope.language6 ;
        
          }
          if($scope.languageDataArray[6]){
            $scope.language7 = $scope.languageDataArray[6] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2 + "," + $scope.language3 + "," + $scope.language4 + "," + $scope.language5 + "," + $scope.language6 + ","  + $scope.language7;
        
          }
          if($scope.languageDataArray[7]){
            $scope.language8 = $scope.languageDataArray[7] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2 + "," + $scope.language3 + "," + $scope.language4 + "," + $scope.language5 + "," + $scope.language6 + "," + $scope.language7 + "," + $scope.language8 ;
        
          }
          if($scope.languageDataArray[8]){
            $scope.language9 = $scope.languageDataArray[8] ; 
        $scope.personal_details.cust_language = $scope.language1 + "," + $scope.language2 + "," + $scope.language3 + "," + $scope.language4 + "," + $scope.language5 + "," + $scope.language6 + "," + $scope.language7 + "," + $scope.language8 + "," + $scope.language9;
        
          }  
       }
     }
   });
  $scope.preferredlanguagedata = $scope.preferredlanguageOther;
  if($scope.preferredlanguagedata){
    $scope.personal_details.cust_language = $scope.preferredlanguagedata;
  }; 
  $scope.personal_details.cust_dob =  $filter('date')(new Date($scope.cust_dob), "yyyy-MM-dd");
   $scope.personal_details.cust_gender = $scope.selectedgender.name; 
   $scope.cust_gender = $scope.personal_details.cust_gender;
   $scope.personal_details.cust_marital_status = $scope.selectedmaritalstatus.name; 
   $scope.cust_marital_status = $scope.personal_details.cust_marital_status;
   $scope.personal_details.cust_dom = $filter('date')(new Date($scope.cust_dom), "yyyy-MM-dd");
  //  $scope.cust_religion = $scope.personal_details.cust_religion; 
   $scope.personal_details.cust_living_place = $scope.selectedlivingplace.name; 
   $scope.cust_living_place = $scope.personal_details.cust_living_place;
  //  $scope.cust_living_situation = $scope.personal_details.cust_living_situation;
   $scope.personal_details.cust_staying_with = $scope.selectedstayingwith.name; 
   $scope.cust_staying_with = $scope.personal_details.cust_staying_with;
   $scope.personal_details.cust_family_member_1 = $scope.cust_family_member_1 + "," + $scope.age1 + "," + $scope.relationship1 + "," + $scope.remarks1 ;
   $scope.personal_details.cust_family_member_2 = $scope.cust_family_member_2 + "," + $scope.age2 + "," + $scope.relationship2 + "," + $scope.remarks2;
   $scope.personal_details.cust_family_member_3 = $scope.cust_family_member_3 + "," + $scope.age3 + "," + $scope.relationship3 + "," + $scope.remarks3;
   $scope.personal_details.cust_education_1 = $scope.cust_education_1 +"," + $scope.year1 + "," + $scope.University1 ;
   $scope.personal_details.cust_education_2 = $scope.cust_education_2 +"," + $scope.year2 + "," + $scope.University2 ;
   $scope.personal_details.cust_education_3 = $scope.cust_education_3 +"," + $scope.year3 + "," + $scope.University3 ;
   $scope.cust_asset_1 = $scope.selectedassets1.name; 
   $scope.personal_details.cust_asset_1 = $scope.cust_asset_1 + "," + $scope.detailsassets1 +"," + $scope.valueassets1;
   $scope.cust_asset_2 = $scope.selectedassets2.name; 
   $scope.personal_details.cust_asset_2 = $scope.cust_asset_2 + "," + $scope.detailsassets2 +"," + $scope.valueassets2;
   $scope.cust_asset_3 = $scope.selectedassets3.name; 
   $scope.personal_details.cust_asset_3 = $scope.cust_asset_3 + "," + $scope.detailsassets3 +"," + $scope.valueassets3;

   $scope.religiouspreferenceArray = [];
     
   angular.forEach($scope.religiouspreference, function(religiouspreferencedata){
     if (religiouspreferencedata.selected == true) {   
      $scope.language1 = "";
       $scope.religiouspreferenceArray.push(religiouspreferencedata.name);
       if($scope.religiouspreferenceArray){
        $scope.personal_details.cust_religion = $scope.religiouspreferenceArray;
       }
     }
   });
  $scope.religiouspreferencevalue = $scope.religiouspreferenceeOther;
  if($scope.religiouspreferencevalue){
    $scope.personal_details.cust_religion = $scope.religiouspreferencevalue;
  }
  $scope.cust_religion = $scope.personal_details.cust_religion;

  $scope.livingsituationArray = [];
     
  angular.forEach($scope.livingsituation, function(livingsituationdata){
    if (livingsituationdata.selected == true) {   
    //  $scope.language1 = "";
      $scope.livingsituationArray.push(livingsituationdata.name);
      if($scope.livingsituationArray){
       $scope.personal_details.cust_living_situation = $scope.livingsituationArray;
      }
    }
  });
  
 $scope.livingsituationvalue = $scope.livingsituationOther;
 if($scope.livingsituationvalue){
   $scope.personal_details.cust_living_situation = $scope.livingsituationvalue;
 }
 $scope.cust_living_situation = $scope.personal_details.cust_living_situation;
 $scope.cust_risk_assessment_1 = $scope.personal_details.cust_risk_assessment_1;
 $scope.cust_risk_assessment_2 = $scope.personal_details.cust_risk_assessment_2;
 $scope.cust_risk_assessment_3 = $scope.personal_details.cust_risk_assessment_3;
 $scope.cust_risk_assessment_4 = $scope.personal_details.cust_risk_assessment_4;
 $scope.cust_risk_assessment_5 = $scope.personal_details.cust_risk_assessment_5;
 

 homeCareRegistrationService.homeCareRegistration($scope.homecare_reg.user_name,$scope.homecare_reg.mobile_number,$scope.homecare_reg.prefered_name,$scope.homecare_reg.user_type,$scope.homecare_reg.password,$scope.personal_details.user_email,$scope.personal_details.cust_email,$scope.personal_details.cust_address,$scope.personal_details.cust_community, $scope.personal_details.cust_geolocation,$scope.personal_details.cust_category,$scope.personal_details.cust_language,$scope.personal_details.cust_dob,$scope.personal_details.cust_gender,$scope.personal_details.cust_marital_status,$scope.personal_details.cust_dom,$scope.personal_details.cust_living_place,$scope.personal_details.cust_staying_with,$scope.personal_details.cust_family_member_1,$scope.personal_details.cust_family_member_2,$scope.personal_details.cust_family_member_3,$scope.personal_details.cust_education_1,$scope.personal_details.cust_education_2,$scope.personal_details.cust_education_3,$scope.personal_details.cust_asset_1,$scope.personal_details.cust_asset_2,$scope.personal_details.cust_asset_3,$scope.personal_details.cust_religion,$scope.personal_details.cust_living_situation,$scope.personal_details.cust_risk_assessment_1,$scope.personal_details.cust_risk_assessment_2,$scope.personal_details.cust_risk_assessment_3,$scope.personal_details.cust_risk_assessment_4,$scope.personal_details.cust_risk_assessment_5).success(function (result) {
        
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

    homeCareRegistrationController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('homeCareRegistrationController', homeCareRegistrationController)
      .directive("ngFileSelect", function(fileReader, $timeout) {
        return {
          scope: {
            ngModel: '='
          },
          link: function($scope, el) {
            function getFile(file) {
              fileReader.readAsDataUrl(file, $scope)
                .then(function(result) {
                  $timeout(function() {
                    $scope.ngModel = result;
                  });
                });
            }
    
            el.bind("change", function(e) {
              var file = (e.srcElement || e.target).files[0];
              getFile(file);
            });
          }
        };
      })
    
      
.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function(reader, scope) {
    return function(event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function(deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function(file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});
  })();