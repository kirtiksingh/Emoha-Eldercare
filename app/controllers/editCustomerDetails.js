'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$timeout','$filter','editCustomerDetailsService'];
  var editCustomerDetailsController = function ($scope,$rootScope,$location,$timeout,$filter,editCustomerDetailsService) {

    // $scope.init = function(){
    //   $scope.date = null;
    //   $scope.datepickerOptions = {
    //     minDate: new Date('1800-01-01'),
    //     initDate: new Date()
    //   };
     
    // };

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


//  $scope.preferredlanguage = [{
  
//   name: 'Hindi'
// },
// {
//   selected:false,
//   name: 'Urdu'
// },
// {
//   selected:false,
//   name: 'English'
// },
// {
//   selected:false,
//   name: 'Punjabi'
// },
// {
//   selected:false,
//   name: 'Bengali'
// },
// {
//   selected:false,
//   name: 'Gujrati'
// },
// {
//   selected:false,
//   name: 'Malayalam'
// },
// {
//   selected:false,
//   name: 'telugu'
// },
// {
//   selected:false,
//   name: 'Tamil'
// }
// ];


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
  
  $scope.customerIdData = function(){
    $rootScope.customerId = $rootScope.customerIdValue ;
    editCustomerDetailsService.customerId($scope.customerId).success(function (result) {
     
      if (result) {
       
        $scope.customerIdDetailsData = result;
        $scope.cust_id = $scope.customerIdDetailsData[0].cust_id;
        $scope.dob = $scope.customerIdDetailsData[0].cust_dob.slice(0,10);
        $scope.address = $scope.customerIdDetailsData[0].cust_address.split(',')[0];
        $scope.country = $scope.customerIdDetailsData[0].cust_address.split(',')[1];
        $scope.city = $scope.customerIdDetailsData[0].cust_address.split(',')[3];
        $scope.pincode = $scope.customerIdDetailsData[0].cust_address.split(',')[4];
        $scope.familymemebername1 = $scope.customerIdDetailsData[0].cust_family_member_1.split(',')[0];
        $scope.familymemebername2 = $scope.customerIdDetailsData[0].cust_family_member_2.split(',')[0];
        $scope.familymemebername3 = $scope.customerIdDetailsData[0].cust_family_member_3.split(',')[0];
        $scope.familymemeberage1 = $scope.customerIdDetailsData[0].cust_family_member_1.split(',')[1];
        $scope.familymemeberage2 = $scope.customerIdDetailsData[0].cust_family_member_2.split(',')[1];
        $scope.familymemeberage3 = $scope.customerIdDetailsData[0].cust_family_member_3.split(',')[1];
        $scope.familymemeberrelation1 = $scope.customerIdDetailsData[0].cust_family_member_1.split(',')[2];
        $scope.familymemeberrelation2 = $scope.customerIdDetailsData[0].cust_family_member_2.split(',')[2];
        $scope.familymemeberrelation3 = $scope.customerIdDetailsData[0].cust_family_member_3.split(',')[2];
        $scope.familymemeberremark1 = $scope.customerIdDetailsData[0].cust_family_member_1.split(',')[3];
        $scope.familymemeberremark2 = $scope.customerIdDetailsData[0].cust_family_member_2.split(',')[3];
        $scope.familymemeberremark3 = $scope.customerIdDetailsData[0].cust_family_member_3.split(',')[3];
        $scope.degree1 = $scope.customerIdDetailsData[0].cust_education_1.split(',')[0];
        $scope.degree2 = $scope.customerIdDetailsData[0].cust_education_2.split(',')[0];
        $scope.degree3 = $scope.customerIdDetailsData[0].cust_education_3.split(',')[0];
        $scope.year1 = $scope.customerIdDetailsData[0].cust_education_1.split(',')[1];
        $scope.year2 = $scope.customerIdDetailsData[0].cust_education_2.split(',')[1];
        $scope.year3 = $scope.customerIdDetailsData[0].cust_education_3.split(',')[1];
        $scope.university1 = $scope.customerIdDetailsData[0].cust_education_1.split(',')[2];
        $scope.university2 = $scope.customerIdDetailsData[0].cust_education_2.split(',')[2];
        $scope.university3 = $scope.customerIdDetailsData[0].cust_education_3.split(',')[2];
        $scope.details1 = $scope.customerIdDetailsData[0].cust_asset_1.split(',')[1];
        $scope.details2 = $scope.customerIdDetailsData[0].cust_asset_2.split(',')[1];
        $scope.details3 = $scope.customerIdDetailsData[0].cust_asset_3.split(',')[1];
        $scope.value1 = $scope.customerIdDetailsData[0].cust_asset_1.split(',')[2];
        $scope.value2 = $scope.customerIdDetailsData[0].cust_asset_2.split(',')[2];
        $scope.value3 = $scope.customerIdDetailsData[0].cust_asset_3.split(',')[2];
      
       
        $scope.dom = $scope.customerIdDetailsData[0].cust_dom;
        $scope.lan = $scope.customerIdDetailsData[0].cust_language;
        $scope.religion = $scope.customerIdDetailsData[0].cust_religion;
        $scope.riskassessment1 = $scope.customerIdDetailsData[0].cust_risk_assessment_1;
        $scope.riskassessment2 = $scope.customerIdDetailsData[0].cust_risk_assessment_2;
        $scope.riskassessment3 = $scope.customerIdDetailsData[0].cust_risk_assessment_3;
        $scope.riskassessment4 = $scope.customerIdDetailsData[0].cust_risk_assessment_4;
        $scope.riskassessment5 = $scope.customerIdDetailsData[0].cust_risk_assessment_5;
        $scope.livingsituation = $scope.customerIdDetailsData[0].cust_living_situation;
       
       
        if($scope.lan){
          // $scope.customerIdDetailsData.cust_language.isChecked;
         $scope.languagevalue1 = $scope.lan.split(',')[0];
         $scope.languagevalue2 = $scope.lan.split(',')[1];
         $scope.languagevalue3 = $scope.lan.split(',')[2];
         $scope.languagevalue4 = $scope.lan.split(',')[3];
         $scope.languagevalue5 = $scope.lan.split(',')[4];
         $scope.languagevalue6 = $scope.lan.split(',')[5];
         $scope.languagevalue7 = $scope.lan.split(',')[6];
         $scope.languagevalue8 = $scope.lan.split(',')[7];
         $scope.languagevalue9 = $scope.lan.split(',')[8];
        
      if($scope.languagevalue1 == "hindi"){
          $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false}; 
          if($scope.languagevalue2 == "english"){
            $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "urdu"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "punjabi"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "bengali"){
                  $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
                  if($scope.languagevalue6 == "gujrati"){
                    $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                    if($scope.languagevalue7 == "malayalam"){
                      $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                      if($scope.languagevalue8 == "telgu"){
                        $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                        if($scope.languagevalue9 == "tamil"){
                          $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                         } 
                      }
                    }
                  }
                }
              }
               if($scope.languagevalue4 == "bengali"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "gujrati"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "malayalam"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "punjabi"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "bengali"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              }
            }
             if($scope.languagevalue3 == "bengali"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "gujrati"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "gujrati"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "malayalam"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
              }
            }
             if($scope.languagevalue3 == "malayalam"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "telgu"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
               } 
            }
             if($scope.languagevalue3 == "tamil"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             } 
          }
           if($scope.languagevalue2 == "urdu"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "punjabi"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "bengali"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "gujrati"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "malayalam"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "telgu"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "tamil"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }

      }
      if($scope.languagevalue1 == "english"){
          $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "urdu"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "punjabi"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "bengali"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "gujrati"){
                  $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                  if($scope.languagevalue6 == "gujrati"){
                    $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                    if($scope.languagevalue7 == "malayalam"){
                      $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                      if($scope.languagevalue8 == "telgu"){
                        $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                        if($scope.languagevalue9 == "tamil"){
                          $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                         }
                      }
                    }
                  }
                }
              }
               if($scope.languagevalue4 == "gujrati"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "bengali"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "gujrati"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "gujrati"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "telgu"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "tamil"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "punjabi"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "bengali"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "telgu"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "tamil"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "urdu"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "punjabi"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            }
             if($scope.languagevalue3 == "bengali"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              }
              if($scope.languagevalue4 == "gujrati"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "malayalam"){
                  $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                  if($scope.languagevalue6 == "telgu"){
                    $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                    if($scope.languagevalue6 == "tamil"){
                      $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                     }
                  }
                }
              }
               if($scope.languagevalue4 == "malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "gujrati"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "bengali"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "punjabi"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "bengali"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "english"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
             }
            if($scope.languagevalue3 == "gujrati"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "english"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "telgu"){
                  $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                  if($scope.languagevalue6 == "tamil"){
                    $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                  }
                }
              }
               if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "bengali"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "english"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "urdu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                if($scope.languagevalue5 == "tamil"){
                  $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                 }
              }
               if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
               }
               if($scope.languagevalue4 == "hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "english"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "urdu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:true,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "gujrati"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "english"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
             }
             if($scope.languagevalue3 == "urdu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "punjabi"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
             }
             if($scope.languagevalue3 == "telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
              if($scope.languagevalue4 == "tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
               }
               if($scope.languagevalue4 == "punjabi"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "urdu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "english"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
          }
           if($scope.languagevalue2 == "telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "malayalam"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
            if($scope.languagevalue3 == "hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "english"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "urdu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "punjabi"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "bengali"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             } 
             if($scope.languagevalue3 == "tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "telgu"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
          if($scope.languagevalue1 == "tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "tamil"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
      }
         

        }
        // capital letter
        if($scope.lan){
          // $scope.customerIdDetailsData.cust_language.isChecked;
         $scope.languagevalue1 = $scope.lan.split(',')[0];
         $scope.languagevalue2 = $scope.lan.split(',')[1];
         $scope.languagevalue3 = $scope.lan.split(',')[2];
         $scope.languagevalue4 = $scope.lan.split(',')[3];
         $scope.languagevalue5 = $scope.lan.split(',')[4];
         $scope.languagevalue6 = $scope.lan.split(',')[5];
         $scope.languagevalue7 = $scope.lan.split(',')[6];
         $scope.languagevalue8 = $scope.lan.split(',')[7];
         $scope.languagevalue9 = $scope.lan.split(',')[8];
        
      if($scope.languagevalue1 == "Hindi"){
          $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false}; 
          if($scope.languagevalue2 == "English"){
            $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "Urdu"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Punjabi"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "Bengali"){
                  $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
                  if($scope.languagevalue6 == "Gujrati"){
                    $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                    if($scope.languagevalue7 == "Malayalam"){
                      $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                      if($scope.languagevalue8 == "Telgu"){
                        $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                        if($scope.languagevalue9 == "Tamil"){
                          $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                         } 
                      }
                    }
                  }
                }
              }
               if($scope.languagevalue4 == "Bengali"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Gujrati"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Malayalam"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "Punjabi"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Bengali"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              }
            }
             if($scope.languagevalue3 == "Bengali"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Gujrati"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "Gujrati"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Malayalam"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
              }
            }
             if($scope.languagevalue3 == "Malayalam"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "Telgu"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
               } 
            }
             if($scope.languagevalue3 == "Tamil"){
              $scope.preferredlanguage = { Hindi : true , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             } 
          }
           if($scope.languagevalue2 == "Urdu"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Punjabi"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Bengali"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Gujrati"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Malayalam"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Telgu"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "Tamil"){
            $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }

      }
      if($scope.languagevalue1 == "English"){
          $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "Urdu"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "Punjabi"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Bengali"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "Gujrati"){
                  $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                  if($scope.languagevalue6 == "Gujrati"){
                    $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                    if($scope.languagevalue7 == "Malayalam"){
                      $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                      if($scope.languagevalue8 == "Telgu"){
                        $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                        if($scope.languagevalue9 == "Tamil"){
                          $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                         }
                      }
                    }
                  }
                }
              }
               if($scope.languagevalue4 == "Gujrati"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "Bengali"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Gujrati"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "Gujrati"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "Malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "Telgu"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "Tamil"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "Punjabi"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Bengali"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Telgu"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "Tamil"){
            $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "Urdu"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "Punjabi"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "Hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            }
             if($scope.languagevalue3 == "Bengali"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
              }
              if($scope.languagevalue4 == "Gujrati"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "Malayalam"){
                  $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                  if($scope.languagevalue6 == "Telgu"){
                    $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                    if($scope.languagevalue6 == "Tamil"){
                      $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                     }
                  }
                }
              }
               if($scope.languagevalue4 == "Malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "Gujrati"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "Malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "Telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "Tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "Bengali"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "Tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "Punjabi"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "Bengali"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "Hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "English"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
             }
            if($scope.languagevalue3 == "Gujrati"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "English"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Malayalam"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
                if($scope.languagevalue5 == "Telgu"){
                  $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                  if($scope.languagevalue6 == "Tamil"){
                    $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                  }
                }
              }
               if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "Malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "Telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "Tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "Gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "Tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "Bengali"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "Gujrati"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "Hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "English"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "Urdu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
             }
             if($scope.languagevalue3 == "Malayalam"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
              if($scope.languagevalue4 == "Telgu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
                if($scope.languagevalue5 == "Tamil"){
                  $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
                 }
              }
               if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
               }
               if($scope.languagevalue4 == "Hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "English"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
               if($scope.languagevalue4 == "Urdu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
               }
            }
             if($scope.languagevalue3 == "Telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:true,Tamil:false};
              if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:true,Tamil:true};
               }
            }
             if($scope.languagevalue3 == "Tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:true,Malayalam:false,Telgu:false,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "Malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
           }
           if($scope.languagevalue2 == "Telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "Tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "Gujrati"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "Malayalam"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:false};
            if($scope.languagevalue3 == "Hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "English"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
             }
             if($scope.languagevalue3 == "Urdu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "Punjabi"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
             }
             if($scope.languagevalue3 == "Telgu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
             }
             if($scope.languagevalue3 == "Tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:false,Tamil:true};
              if($scope.languagevalue4 == "Tamil"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:true};
               }
               if($scope.languagevalue4 == "Punjabi"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "Urdu"){
                $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "English"){
                $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
               if($scope.languagevalue4 == "Hindi"){
                $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:true,Telgu:true,Tamil:false};
               }
            }
          }
           if($scope.languagevalue2 == "Telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:true,Tamil:false};
           }
           if($scope.languagevalue2 == "Tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:true,Malayalam:false,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "Malayalam"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:false};
          if($scope.languagevalue2 == "Telgu"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:false};
            if($scope.languagevalue3 == "Hindi"){
              $scope.preferredlanguage = { Hindi : true , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "English"){
              $scope.preferredlanguage = { Hindi : false , English:true, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "Urdu"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:true, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "Punjabi"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:true, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
             if($scope.languagevalue3 == "Bengali"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:true,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             } 
             if($scope.languagevalue3 == "Tamil"){
              $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:true,Tamil:true};
             }
          }
           if($scope.languagevalue2 == "Tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:true,Telgu:false,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "Telgu"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:false};
          if($scope.languagevalue1 == "Tamil"){
            $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:true,Tamil:true};
           }
      }

      if($scope.languagevalue1 == "Tamil"){
          $scope.preferredlanguage = { Hindi : false , English:false, Urdu:false, Punjabi:false, Bengali:false,Gujrati:false,Malayalam:false,Telgu:false,Tamil:true};
      }
         

        }
        // capital letter
      if($scope.religion){
        $scope.religion1 = $scope.religion.split(',')[0];
        $scope.religion2 = $scope.religion.split(',')[1];
        $scope.religion3 = $scope.religion.split(',')[2];
        $scope.religion4 = $scope.religion.split(',')[3];
        $scope.religion5 = $scope.religion.split(',')[4];
        $scope.religion6 = $scope.religion.split(',')[5];
        $scope.religion7 = $scope.religion.split(',')[6];
       
        if($scope.religion1 == "null"){
          $scope.religiondata = { 'Atheist/Agnostic' : false , Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
        }
        else{
          if($scope.religion1 == "atheist"){
            $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
            if($scope.religion2 == "buddhism"){
              $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
              if($scope.religion3 == "Christian"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
                if($scope.religion4 == "hinduism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
                  if($scope.religion5 == "islam"){
                    $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:true, Islam:true,Jainism :false,Sikhism:false}; 
                    if($scope.religion6 == "jainism"){
                      $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:true, Islam:true,Jainism :true,Sikhism:false}; 
                      if($scope.religion7 == "sikhism"){
                        $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:true, Islam:true,Jainism :true,Sikhism:true}; 
                      }
                    }
                  }
                }
                if($scope.religion4 == "islam"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:false, Islam:true,Jainism :false,Sikhism:false}; 
                }
                if($scope.religion4 == "jainism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
                }
                if($scope.religion4 == "sikhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :false,Sikhism:true}; 
                }
              }
              if($scope.religion3 == "hinduism"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
                if($scope.religion4 == "islam"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:true, Islam:true,Jainism :false,Sikhism:false}; 
                }
              }
              if($scope.religion3 == "islam"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:false, Islam:true,Jainism :false,Sikhism:false}; 
                if($scope.religion4 == "jainism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:false, Islam:true,Jainism :true,Sikhism:false}; 
                }
              }
              if($scope.religion3 == "jainism"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
                if($scope.religion4 == "sikhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:true}; 
                }
              }
              if($scope.religion3 == "sikhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:true}; 
              }
            }
            if($scope.religion2 == "Christian"){
              $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:true, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
            }
            if($scope.religion2 == "hinduism"){
              $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
            }
            if($scope.religion2 == "islam"){
              $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:false, Islam:true,Jainism :false,Sikhism:false}; 
            }
            if($scope.religion2 == "jainism"){
              $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
            }
            if($scope.religion2 == "sikhism"){
              $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:true}; 
            }
          }
          if($scope.religion1 == "buddhism"){
            $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
            if($scope.religion2 == "Christian"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
              if($scope.religion3 == "hinduism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
                if($scope.religion4 == "islam"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:true, Islam:true,Jainism :false,Sikhism:false}; 
                  if($scope.religion5 == "jainism"){
                    $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:true, Islam:true,Jainism :true,Sikhism:false}; 
                    if($scope.religion6 == "sikhism"){
                      $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:true, Islam:true,Jainism :true,Sikhism:true}; 
                    }
                  }
                }
                if($scope.religion4 == "jainism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:true, Islam:false,Jainism :true,Sikhism:false}; 
                }
                if($scope.religion4 == "sikhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:true, Islam:false,Jainism :false,Sikhism:true}; 
                }
              }
              if($scope.religion3 == "islam"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:false, Islam:true,Jainism :false,Sikhism:false}; 
                if($scope.religion4 == "jainism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
                }
              }
              if($scope.religion3 == "jainism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
                if($scope.religion4 == "sikhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :true,Sikhism:true}; 
                }
              }
              if($scope.religion3 == "sikhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:true, Hinduism:false, Islam:false,Jainism :false,Sikhism:true}; 
              }
            }
            if($scope.religion2 == "hinduism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
            }
            if($scope.religion2 == "islam"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:false, Islam:true,Jainism :false,Sikhism:false}; 
            }
            if($scope.religion2 == "jainism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
            }
            if($scope.religion2 == "sikhism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:true}; 
            }
            
          }
          if($scope.religion1 == "Christian"){
            $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:false, Islam:false,Jainism :false,Sikhism:false}; 
            if($scope.religion2 == "hinduism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
              if($scope.religion3 == "islam"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:true,Jainism :false,Sikhism:false}; 
                if($scope.religion4 == "jainism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:true,Jainism :true,Sikhism:false}; 
                  if($scope.religion5 == "sikhism"){
                    $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:true,Jainism :true,Sikhism:true}; 
                  }
                }
                if($scope.religion4 == "sikhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:true,Jainism :false,Sikhism:true}; 
                }
                if($scope.religion4 == "atheist"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:true, Hinduism:true, Islam:true,Jainism :false,Sikhism:false}; 
                }
              }
              if($scope.religion3 == "jainism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:false,Jainism :true,Sikhism:false}; 
                if($scope.religion4 == "sikhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:false,Jainism :true,Sikhism:true}; 
                }
              }
              if($scope.religion3 == "sikhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:true, Islam:false,Jainism :false,Sikhism:true}; 
              }
              if($scope.religion3 == "atheist"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:true, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
              }
            }
            if($scope.religion2 == "islam"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:false, Islam:true,Jainism :false,Sikhism:false}; 
            }
            if($scope.religion2 == "jainism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
            }
            if($scope.religion2 == "sikhism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:false, Islam:false,Jainism :false,Sikhism:true}; 
            }
          }
          if($scope.religion1 == "hinduism"){
            $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :false,Sikhism:false}; 
            if($scope.religion2 == "islam"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:true,Jainism :false,Sikhism:false}; 
              if($scope.religion3 == "buddhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:true, Islam:true,Jainism :false,Sikhism:false}; 
              }
              if($scope.religion3 == "atheist"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :true,Sikhism:false}; 
              }
              if($scope.religion3 == "jainism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :true,Sikhism:false}; 
                if($scope.religion4 == "buddhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:true, Islam:true,Jainism :true,Sikhism:false}; 
                }
                if($scope.religion4 == "atheist"){
                  $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:true, Islam:true,Jainism :true,Sikhism:false}; 
                }
                if($scope.religion4 == "sikhism"){
                  $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:true,Jainism :true,Sikhism:true}; 
                }
              }
              if($scope.religion3 == "sikhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :false,Sikhism:true}; 
              }
            }
            if($scope.religion2 == "jainism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :true,Sikhism:false}; 
            }
            if($scope.religion2 == "sikhism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :false,Sikhism:true}; 
            }
          }
          if($scope.religion1 == "islam"){
            $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:false, Islam:true,Jainism :false,Sikhism:false}; 
            if($scope.religion2 == "jainism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:false, Islam:true,Jainism :true,Sikhism:false}; 
              if($scope.religion3 == "sikhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:false, Islam:true,Jainism :true,Sikhism:true}; 
              }
              if($scope.religion3 == "Christian"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:false, Islam:true,Jainism :true,Sikhism:false}; 
              }
               if($scope.religion3 == "buddhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:false, Islam:true,Jainism :true,Sikhism:false}; 
              }
              if($scope.religion3 == "atheist"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:false, Islam:true,Jainism :true,Sikhism:false}; 
              }
            }
            if($scope.religion2 == "sikhism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:false, Islam:true,Jainism :false,Sikhism:true}; 
            }
          }
          if($scope.religion1 == "jainism"){
            $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:false}; 
            if($scope.religion2 == "sikhism"){
              $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:true}; 
              if($scope.religion3 == "atheist"){
                $scope.religiondata = { 'Atheist/Agnostic' : true, Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:true}; 
              }
              if($scope.religion3 == "buddhism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:true, Christianity:false, Hinduism:false, Islam:false,Jainism :true,Sikhism:true}; 
              }
              if($scope.religion3 == "Christian"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:true, Hinduism:false, Islam:false,Jainism :true,Sikhism:true}; 
              }
              if($scope.religion3 == "hinduism"){
                $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:true, Islam:false,Jainism :true,Sikhism:true}; 
              }

            }
          }
          if($scope.religion1 == "sikhism"){
            $scope.religiondata = { 'Atheist/Agnostic' : false, Buddhism:false, Christianity:false, Hinduism:false, Islam:false,Jainism :false,Sikhism:true}; 
          }
        }
      }
       if(($scope.riskassessment1 == "true")){
        $scope.riskassessment1data = { Yes : true , No :false}; 
       }
       else if(($scope.riskassessment1 == "false")){
        $scope.riskassessment1data = { Yes : false , No :true}; 
       }
       if(($scope.riskassessment2 == "true")){
        $scope.riskassessment2data = { Yes : true , No :false}; 
       }
       else if(($scope.riskassessment2 == "false")){
        $scope.riskassessment2data = { Yes : false , No :true}; 
       }
       if(($scope.riskassessment3 == "true")){
        $scope.riskassessment3data = { Yes : true , No :false}; 
       }
       else if(($scope.riskassessment3 == "false")){
        $scope.riskassessment3data = { Yes : false , No :true}; 
       }
       if(($scope.riskassessment4 == "true")){
        $scope.riskassessment4data = { Yes : true , No :false}; 
       }
       else if(($scope.riskassessment4 == "false")){
        $scope.riskassessment4data = { Yes : false , No :true}; 
       }
       if(($scope.riskassessment5 == "true")){
        $scope.riskassessment5data = { Yes : true , No :false}; 
       }
       else if(($scope.riskassessment5 == "false")){
        $scope.riskassessment5data = { Yes : false , No :true}; 
       }

       if($scope.livingsituation){
        $scope.livingsituation1 = $scope.livingsituation.split(',')[0];
        $scope.livingsituation2 = $scope.livingsituation.split(',')[1];
        $scope.livingsituation3 = $scope.livingsituation.split(',')[2];
        $scope.livingsituation4 = $scope.livingsituation.split(',')[3];
        $scope.livingsituation5 = $scope.livingsituation.split(',')[4];
      
        if($scope.livingsituation1 == "alone"){
          $scope.livingsituationdata = { Alone : true , Spouse:false, Son:false, Daughter:false, Helper:false}; 
          if($scope.livingsituation2 == "spouse"){
            $scope.livingsituationdata = { Alone : true , Spouse:true, Son:false, Daughter:false, Helper:false}; 
            if($scope.livingsituation3 == "son"){
              $scope.livingsituationdata = { Alone : true , Spouse:true, Son:true, Daughter:false, Helper:false}; 
              if($scope.livingsituation4 == "daughter"){
                $scope.livingsituationdata = { Alone : true , Spouse:true, Son:true, Daughter:true, Helper:false}; 
                if($scope.livingsituation5 == "helper"){
                  $scope.livingsituationdata = { Alone : true , Spouse:true, Son:true, Daughter:true, Helper:true}; 
                }
              }
            }
          }
          if($scope.livingsituation2 == "son"){
            $scope.livingsituationdata = { Alone : true , Spouse:false, Son:true, Daughter:false, Helper:false}; 
          }
          if($scope.livingsituation2 == "daughter"){
            $scope.livingsituationdata = { Alone : true , Spouse:false, Son:false, Daughter:true, Helper:false}; 
          }
          if($scope.livingsituation2 == "helper"){
            $scope.livingsituationdata = { Alone : true , Spouse:false, Son:false, Daughter:false, Helper:true}; 
          }
        }
        if($scope.livingsituation1 == "spouse"){
          $scope.livingsituationdata = { Alone : false , Spouse:true, Son:false, Daughter:false, Helper:false}; 
          if($scope.livingsituation2 == "son"){
            $scope.livingsituationdata = { Alone : false , Spouse:true, Son:true, Daughter:false, Helper:false}; 
            if($scope.livingsituation3 == "daughter"){
              $scope.livingsituationdata = { Alone : false , Spouse:true, Son:true, Daughter:true, Helper:false}; 
              if($scope.livingsituation4 == "helper"){
                $scope.livingsituationdata = { Alone : false , Spouse:true, Son:true, Daughter:true, Helper:true}; 
              }
            }
            if($scope.livingsituation3 == "helper"){
              $scope.livingsituationdata = { Alone : false , Spouse:true, Son:true, Daughter:false, Helper:true}; 
            }
          }
          if($scope.livingsituation2 == "daughter"){
            $scope.livingsituationdata = { Alone : false , Spouse:true, Son:false, Daughter:true, Helper:false}; 
          }
          if($scope.livingsituation2 == "helper"){
            $scope.livingsituationdata = { Alone : false , Spouse:true, Son:false, Daughter:false, Helper:true}; 
          }
        }
        if($scope.livingsituation1 == "son"){
          $scope.livingsituationdata = { Alone : false , Spouse:false, Son:true, Daughter:false, Helper:false}; 
          if($scope.livingsituation2 == "daughter"){
            $scope.livingsituationdata = { Alone : false , Spouse:false, Son:true, Daughter:true, Helper:false}; 
            if($scope.livingsituation3 == "helper"){
              $scope.livingsituationdata = { Alone : false , Spouse:false, Son:true, Daughter:true, Helper:true}; 
            }
            if($scope.livingsituation4 == "alone"){
              $scope.livingsituationdata = { Alone : true , Spouse:false, Son:true, Daughter:true, Helper:false}; 
            }
          }
          if($scope.livingsituation2 == "helper"){
            $scope.livingsituationdata = { Alone : false , Spouse:false, Son:true, Daughter:false, Helper:true}; 
          }
        }
        if($scope.livingsituation1 == "daughter"){
          $scope.livingsituationdata = { Alone : false , Spouse:false, Son:false, Daughter:true, Helper:false}; 
          if($scope.livingsituation2 == "helper"){
            $scope.livingsituationdata = { Alone : false , Spouse:false, Son:false, Daughter:true, Helper:true}; 
            if($scope.livingsituation3 == "spouse"){
              $scope.livingsituationdata = { Alone : false , Spouse:true, Son:false, Daughter:true, Helper:true}; 
            }
            if($scope.livingsituation3 == "alone"){
              $scope.livingsituationdata = { Alone : true , Spouse:false, Son:false, Daughter:true, Helper:true}; 
            }
          }
        }
        if($scope.livingsituation1 == "helper"){
          $scope.livingsituationdata = { Alone : false , Spouse:false, Son:false, Daughter:false, Helper:true}; 
        }
       }
      }
     
    });

  };

  $scope.getCommunityData = function () {
   
    $scope.getCommunityManagerdata = {};
    editCustomerDetailsService.getCommunityData().success(function (result) {
     
      if (result) {
      
        $scope.getCommunityManagerdata = result;
       
        angular.forEach($scope.getCommunityManagerdata, function (data) {
       
         $scope.getCommunityManagerdatavalue = data;
        })
      }
    });
  };

  $scope.personal_details ={
    user_email: "",
    // cust_email: "",
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
    prefered_name : "",
    // country : "",
    city : "",
    // pincode : "",
    // community :"",
  };
  
  $scope.personalupdate = function (cust_id) {
    
   $scope.personal_details.prefered_name = $scope.customerIdDetailsData[0].preferred_name;
   $scope.cust_id = cust_id;
   $scope.personal_details.user_email = $scope.customerIdDetailsData[0].cust_email;
  //  $scope.cust_living_place = "value";
   $scope.address1 = $scope.address;
   $scope.state = $scope.customerIdDetailsData[0].cust_address.split(',')[2]; 
   $scope.country = $scope.country; 
   $scope.pincode = $scope.pincode;
   $scope.city = $scope.city;
   
   $scope.personal_details.cust_address = $scope.address1 +" ," + $scope.country + "," + $scope.state + "," + $scope.city + "," + $scope.pincode  ;
   $scope.personal_details.cust_community = $scope.customerIdDetailsData[0].cust_community; 
  //  $scope.cust_community = $scope.personal_details.cust_community ;
   $scope.personal_details.cust_geolocation = $scope.customerIdDetailsData[0].cust_geolocation;
   $scope.personal_details.cust_height = $scope.customerIdDetailsData[0].cust_height ;
   $scope.personal_details.cust_weight = $scope.customerIdDetailsData[0].cust_weight;
  
  var landata = $scope.preferredlanguage;
  for(var i=0; i<9; i++ )
{
  var id = [i];
  var key = Object.keys(landata)[id];
  var value = landata[key];
  if(value == false){
    $scope.cust_language= "";
    if($scope.cust_language == ""){
      $scope.error = "Select Atleast one Language";
    }
  }
 if(value == true)
 {  
      if(key == "Hindi"){
        $scope.language1 = key;
        $scope.cust_language1 = $scope.language1;
        $scope.personal_details.cust_language = $scope.cust_language1;
      }
      if(key == "English"){
        $scope.language2 = key;  
        $scope.cust_language2 = $scope.language2; 
        $scope.personal_details.cust_language = $scope.cust_language2;  
      }
      if($scope.cust_language1 && (($scope.cust_language2)|| ($scope.cust_language3)) || ($scope.cust_language4) || ($scope.cust_language5) || ($scope.cust_language6) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9)){
        $scope.cust_language12 = $scope.cust_language1 + "," +$scope.cust_language2;
        $scope.personal_details.cust_language = $scope.cust_language12;
        if($scope.cust_language12 && $scope.cust_language3 && $scope.cust_language4){
          $scope.cust_languagefour41 = $scope.cust_language12 + "," +$scope.cust_language3 + "," +$scope.cust_language4;
          $scope.personal_details.cust_language = $scope.cust_languagefour41;
        }
        if($scope.cust_language12 && $scope.cust_language4 && $scope.cust_language5){
          $scope.cust_languagefour42 = $scope.cust_language12 + "," +$scope.cust_language4 + "," +$scope.cust_language5;
          $scope.personal_details.cust_language = $scope.cust_languagefour42;
        }
        if($scope.cust_language12 && $scope.cust_language5 && $scope.cust_language6){
          $scope.cust_languagefour43 = $scope.cust_language12 + "," +$scope.cust_language5 + "," +$scope.cust_language6;
          $scope.personal_details.cust_language = $scope.cust_languagefour43;
        }
        if($scope.cust_language12 && $scope.cust_language6 && $scope.cust_language7){
          $scope.cust_languagefour44 = $scope.cust_language12 + "," +$scope.cust_language6 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_languagefour44;
        }
        if($scope.cust_language12 && $scope.cust_language7 && $scope.cust_language8){
          $scope.cust_languagefour45 = $scope.cust_language12 + "," +$scope.cust_language7 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_languagefour45;
        }
        if($scope.cust_language12 && $scope.cust_language8 && $scope.cust_language9){
          $scope.cust_languagefour46 = $scope.cust_language12 + "," +$scope.cust_language8 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_languagefour46;
        }
        if($scope.cust_language1 && $scope.cust_language3 ){
          $scope.cust_language13 = $scope.cust_language1 + "," +$scope.cust_language3;
          $scope.personal_details.cust_language = $scope.cust_language13;    
        }
        if($scope.cust_language1 && $scope.cust_language4 ){
          $scope.cust_language14 = $scope.cust_language1 + "," +$scope.cust_language4;
          $scope.personal_details.cust_language = $scope.cust_language14;    
        }
        if($scope.cust_language1 && $scope.cust_language5 ){
          $scope.cust_language15 = $scope.cust_language1 + "," +$scope.cust_language5;
          $scope.personal_details.cust_language = $scope.cust_language15;    
        }
        if($scope.cust_language1 && $scope.cust_language6 ){
          $scope.cust_language16 = $scope.cust_language1 + "," +$scope.cust_language6;
          $scope.personal_details.cust_language = $scope.cust_language16;    
        }
        if($scope.cust_language1 && $scope.cust_language7 ){
          $scope.cust_language17 = $scope.cust_language1 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_language17;    
        }
        if($scope.cust_language1 && $scope.cust_language8 ){
          $scope.cust_language18 = $scope.cust_language1 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_language18;    
        }
        if($scope.cust_language1 && $scope.cust_language9 ){
          $scope.cust_language19 = $scope.cust_language1 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_language19;    
        }
        if(($scope.cust_language1 && $scope.cust_language2 && $scope.cust_language3) || ($scope.cust_language5) || ($scope.cust_language6) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9)){
          $scope.cust_languagethree1 = $scope.cust_language1 + "," + $scope.cust_language2 + "," +$scope.cust_language3;              
          $scope.personal_details.cust_language = $scope.cust_languagethree1;
          if($scope.cust_languagethree1 && $scope.cust_language5){
            $scope.cust_languagefour41 = $scope.cust_languagethree1 + "," + $scope.cust_language5;              
            $scope.personal_details.cust_language = $scope.cust_languagefour41;
          }
          if(($scope.cust_languagethree1 && $scope.cust_language4)||($scope.cust_language5) ||($scope.cust_language6)||($scope.cust_language7)|| ($scope.cust_language8) || ($scope.cust_language9)){
            $scope.cust_languagefour41 = $scope.cust_languagethree1 + "," + $scope.cust_language4;              
            $scope.personal_details.cust_language = $scope.cust_languagefour41;
            if(($scope.cust_languagefour41 && $scope.cust_language5)|| ($scope.cust_language6)|| ($scope.cust_language7)|| ($scope.cust_language8) || ($scope.cust_language9)){
              $scope.cust_languagefive51 = $scope.cust_languagefour41 + "," + $scope.cust_language5;              
              $scope.personal_details.cust_language = $scope.cust_languagefive51;
              if((($scope.cust_languagefive51 && $scope.cust_language6))|| ($scope.cust_language7)|| ($scope.cust_language8) || ($scope.cust_language9)){
                $scope.cust_languageSix61 = $scope.cust_languagefive51 + "," + $scope.cust_language7;              
                $scope.personal_details.cust_language = $scope.cust_languageSix61;
                if(($scope.cust_languageSix61 && $scope.cust_language8) ||($scope.cust_language9)){
                  $scope.cust_languageSeven71 = $scope.cust_languageSix61 + "," + $scope.cust_language8;              
                $scope.personal_details.cust_language = $scope.cust_languageSeven71;
                if(($scope.cust_languageSeven71 && $scope.cust_language9)){
                  $scope.cust_languageNine91 = $scope.cust_languageSeven71 + "," + $scope.cust_language9;              
                $scope.personal_details.cust_language = $scope.cust_languageNine91;
                }
                }
              }
            }
          }
          if($scope.cust_languagethree1 && $scope.cust_language6){
            $scope.cust_languagefour42 = $scope.cust_languagethree1 + "," + $scope.cust_language6;              
            $scope.personal_details.cust_language = $scope.cust_languagefour42;
          }
          if($scope.cust_languagethree1 && $scope.cust_language7){
            $scope.cust_languagefour43 = $scope.cust_languagethree1 + "," + $scope.cust_language7;              
            $scope.personal_details.cust_language = $scope.cust_languagefour43;
          }
          if($scope.cust_languagethree1 && $scope.cust_language8){
            $scope.cust_languagefour44 = $scope.cust_languagethree1 + "," + $scope.cust_language8;              
            $scope.personal_details.cust_language = $scope.cust_languagefour44;
          }
          if($scope.cust_languagethree1 && $scope.cust_language9){
            $scope.cust_languagefour45 = $scope.cust_languagethree1 + "," + $scope.cust_language9;              
            $scope.personal_details.cust_language = $scope.cust_languagefour45;
          }
        }
        if($scope.cust_language1 && $scope.cust_language2 && $scope.cust_language4){
          $scope.cust_languagethree2 = $scope.cust_language1 + "," + $scope.cust_language2 + "," +$scope.cust_language4;              
          $scope.personal_details.cust_language = $scope.cust_languagethree2;
        }
        if($scope.cust_language1 && $scope.cust_language2 && $scope.cust_language5){
          $scope.cust_languagethree3 = $scope.cust_language1 + "," + $scope.cust_language2 + "," +$scope.cust_language5;              
          $scope.personal_details.cust_language = $scope.cust_languagethree3;
        }
        if($scope.cust_language1 && $scope.cust_language2 && $scope.cust_language6){
          $scope.cust_languagethree4 = $scope.cust_language1 + "," + $scope.cust_language2 + "," +$scope.cust_language6;              
          $scope.personal_details.cust_language = $scope.cust_languagethree4;
        }
        if($scope.cust_language1 && $scope.cust_language2 && $scope.cust_language7){
          $scope.cust_languagethree5 = $scope.cust_language1 + "," + $scope.cust_language2 + "," +$scope.cust_language7;              
          $scope.personal_details.cust_language = $scope.cust_languagethree5;
        }
        if($scope.cust_language1 && $scope.cust_language2 && $scope.cust_language8){
          $scope.cust_languagethree6 = $scope.cust_language1 + "," + $scope.cust_language2 + "," +$scope.cust_language8;              
          $scope.personal_details.cust_language = $scope.cust_languagethree6;
        }
        if($scope.cust_language1 && $scope.cust_language2 && $scope.cust_language9){
          $scope.cust_languagethree7 = $scope.cust_language1 + "," + $scope.cust_language2 + "," +$scope.cust_language9;              
          $scope.personal_details.cust_language = $scope.cust_languagethree7;
        }
      }
      if($scope.cust_language2 && (($scope.cust_language3) || ($scope.cust_language4) || ($scope.cust_language5) || ($scope.cust_language6) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9))){
        $scope.cust_language23 = $scope.cust_language2 + "," +$scope.cust_language3;
        $scope.personal_details.cust_language = $scope.cust_language23;
        if(($scope.cust_language23 && $scope.cust_language4 && $scope.cust_language5) || ($scope.cust_language6)){
          $scope.cust_languagefour41 = $scope.cust_language23 + "," +$scope.cust_language4 + "," +$scope.cust_language5;
          $scope.personal_details.cust_language = $scope.cust_languagefour41;
          if( $scope.cust_languagefour41 && $scope.cust_language6){
            $scope.cust_languagefive52 = $scope.cust_languagefour41 + "," + $scope.cust_language6;
           $scope.personal_details.cust_language = $scope.cust_languagefive52;
          }
        }
        if($scope.cust_language23 && $scope.cust_language5 && $scope.cust_language6){
          $scope.cust_languagefour42 = $scope.cust_language23 + "," +$scope.cust_language5 + "," +$scope.cust_language6;
          $scope.personal_details.cust_language = $scope.cust_languagefour42;
        }
        if($scope.cust_language23 && $scope.cust_language6 && $scope.cust_language7){
          $scope.cust_languagefour43 = $scope.cust_language23 + "," +$scope.cust_language6 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_languagefour43;
        }
        if($scope.cust_language23 && $scope.cust_language7 && $scope.cust_language8){
          $scope.cust_languagefour44 = $scope.cust_language23 + "," +$scope.cust_language7 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_languagefour44;
        }
        if($scope.cust_language23 && $scope.cust_language8 && $scope.cust_language9){
          $scope.cust_languagefour45 = $scope.cust_language23 + "," +$scope.cust_language8 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_languagefour45;
        }
        if($scope.cust_language2 && $scope.cust_language4 ){
          $scope.cust_language24 = $scope.cust_language2 + "," +$scope.cust_language4;
          $scope.personal_details.cust_language = $scope.cust_language24;    
        }
        if($scope.cust_language2 && $scope.cust_language5 ){
          $scope.cust_language25 = $scope.cust_language2 + "," +$scope.cust_language5;
          $scope.personal_details.cust_language = $scope.cust_language25;    
        }
        if($scope.cust_language2 && $scope.cust_language6 ){
          $scope.cust_language26 = $scope.cust_language2 + "," +$scope.cust_language6;
          $scope.personal_details.cust_language = $scope.cust_language26;    
        }
        if($scope.cust_language2 && $scope.cust_language7 ){
          $scope.cust_language27 = $scope.cust_language2 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_language27;    
        }
        if($scope.cust_language2 && $scope.cust_language8 ){
          $scope.cust_language28 = $scope.cust_language2 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_language28;    
        }
        if($scope.cust_language2 && $scope.cust_language9 ){
          $scope.cust_language29 = $scope.cust_language2 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_language29;    
        }
        
        if(($scope.cust_language2 && $scope.cust_language3 && $scope.cust_language4) || ($scope.cust_language5) || ($scope.cust_language6) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9)){
          $scope.cust_languagethree12 = $scope.cust_language2 + "," + $scope.cust_language3 + "," +$scope.cust_language4;              
          $scope.personal_details.cust_language = $scope.cust_languagethree12;
          if(($scope.cust_languagethree12 && $scope.cust_language5 && $scope.cust_language6)|| ($scope.cust_language7)|| ($scope.cust_language8)|| ($scope.cust_language9)){
            $scope.cust_languageSix61 = $scope.cust_languagethree12 + "," + $scope.cust_language5 + "," + $scope.cust_language6;              
            $scope.personal_details.cust_language = $scope.cust_languageSix61;
            if(($scope.cust_languageSix61 && $scope.cust_language7)|| ($scope.cust_language8)|| ($scope.cust_language9)){
              $scope.cust_languages72 = $scope.cust_languageSix61 + "," + $scope.cust_language7;              
            $scope.personal_details.cust_language = $scope.cust_languages72;
            if($scope.cust_languages72 && ($scope.cust_language8)|| ($scope.cust_language9)){
              $scope.cust_languageSeven73 = $scope.cust_languages72 + "," + $scope.cust_language8;              
              $scope.personal_details.cust_language = $scope.cust_languageSeven73 ;
              if($scope.cust_languageSeven73 && ($scope.cust_language9)){
                $scope.cust_languageEight81 = $scope.cust_languageSeven73 + "," + $scope.cust_language9;              
                $scope.personal_details.cust_language = $scope.cust_languageEight81 ;
              }
            }
            }
          }
          if($scope.cust_languagethree12 && $scope.cust_language6){
            $scope.cust_languagethree41 = $scope.cust_languagethree12 + "," + $scope.cust_language6;              
            $scope.personal_details.cust_language = $scope.cust_languagethree41;
          }
          if($scope.cust_languagethree12 && $scope.cust_language7){
            $scope.cust_languagethree42 = $scope.cust_languagethree12 + "," + $scope.cust_language7;              
            $scope.personal_details.cust_language = $scope.cust_languagethree42;
          }
          if($scope.cust_languagethree12 && $scope.cust_language8){
            $scope.cust_languagethree43 = $scope.cust_languagethree12 + "," + $scope.cust_language8;              
            $scope.personal_details.cust_language = $scope.cust_languagethree43;
          }
          if($scope.cust_languagethree12 && $scope.cust_language9){
            $scope.cust_languagethree44 = $scope.cust_languagethree12 + "," + $scope.cust_language9;              
            $scope.personal_details.cust_language = $scope.cust_languagethree44;
          }
        }
        if($scope.cust_language2 && $scope.cust_language3 && $scope.cust_language5){
          $scope.cust_languagethree22 = $scope.cust_language2 + "," + $scope.cust_language3 + "," +$scope.cust_language5;              
          $scope.personal_details.cust_language = $scope.cust_languagethree22;
        }
        if($scope.cust_language2 && $scope.cust_language3 && $scope.cust_language6){
          $scope.cust_languagethree32 = $scope.cust_language2 + "," + $scope.cust_language3 + "," +$scope.cust_language6;              
          $scope.personal_details.cust_language = $scope.cust_languagethree32;
        }
        if($scope.cust_language2 && $scope.cust_language3 && $scope.cust_language7){
          $scope.cust_languagethree42 = $scope.cust_language2 + "," + $scope.cust_language3 + "," +$scope.cust_language7;              
          $scope.personal_details.cust_language = $scope.cust_languagethree42;
        }
        if($scope.cust_language2 && $scope.cust_language3 && $scope.cust_language8){
          $scope.cust_languagethree52 = $scope.cust_language2 + "," + $scope.cust_language3 + "," +$scope.cust_language8;              
          $scope.personal_details.cust_language = $scope.cust_languagethree52;
        }
        if($scope.cust_language2 && $scope.cust_language3 && $scope.cust_language9){
          $scope.cust_languagethree62 = $scope.cust_language2 + "," + $scope.cust_language3 + "," +$scope.cust_language9;              
          $scope.personal_details.cust_language = $scope.cust_languagethree62;
        }
      };
      if($scope.cust_language3 && (($scope.cust_language1) ||($scope.cust_language4) || ($scope.cust_language5) || ($scope.cust_language6) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9))){
        $scope.cust_language34 = $scope.cust_language3 + "," +$scope.cust_language4;
        $scope.personal_details.cust_language = $scope.cust_language34;
        if(($scope.cust_language34 && $scope.cust_language5 && $scope.cust_language6) || ($scope.cust_language7)|| ($scope.cust_language8)|| ($scope.cust_language9)){
          $scope.cust_languagefour41 = $scope.cust_language34 + "," +$scope.cust_language5 + "," +$scope.cust_language6;
          $scope.personal_details.cust_language = $scope.cust_languagefour41;
          if(($scope.cust_languagefour41 && $scope.cust_language7) || ($scope.cust_language8)|| ($scope.cust_language9)){
            $scope.cust_languagefive53 = $scope.cust_languagefour41 + "," +$scope.cust_language7;
            $scope.personal_details.cust_language = $scope.cust_languagefive53;
            if(($scope.cust_languagefive53 && $scope.cust_language8)|| ($scope.cust_language9)){
              $scope.cust_languageSix64 = $scope.cust_languagefive53 + "," +$scope.cust_language8;
              $scope.personal_details.cust_language = $scope.cust_languageSix64;
              if($scope.cust_languageSix64 && $scope.cust_language9){
                $scope.cust_languageSeven74 = $scope.cust_languageSix64 + "," +$scope.cust_language9;
                $scope.personal_details.cust_language = $scope.cust_languageSeven74;
              }
            }
          }
        }
        if($scope.cust_language34 && $scope.cust_language6 && $scope.cust_language7){
          $scope.cust_languagefour42 = $scope.cust_language34 + "," +$scope.cust_language6 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_languagefour42;
        }
        if($scope.cust_language34 && $scope.cust_language7 && $scope.cust_language8){
          $scope.cust_languagefour43 = $scope.cust_language34 + "," +$scope.cust_language7 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_languagefour43;
        }
        if($scope.cust_language34 && $scope.cust_language8 && $scope.cust_language9){
          $scope.cust_languagefour44 = $scope.cust_language34 + "," +$scope.cust_language8 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_languagefour44;
        }
        if($scope.cust_language3 && $scope.cust_language5 ){
          $scope.cust_language35 = $scope.cust_language3 + "," +$scope.cust_language5;
          $scope.personal_details.cust_language = $scope.cust_language35;    
        }
        if($scope.cust_language3 && $scope.cust_language6 ){
          $scope.cust_language36 = $scope.cust_language3 + "," +$scope.cust_language6;
          $scope.personal_details.cust_language = $scope.cust_language36;    
        }
        if($scope.cust_language3 && $scope.cust_language7 ){
          $scope.cust_language37 = $scope.cust_language3 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_language37;    
        }
        if($scope.cust_language3 && $scope.cust_language8 ){
          $scope.cust_language38 = $scope.cust_language3 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_language38;    
        }
        if($scope.cust_language3 && $scope.cust_language9 ){
          $scope.cust_language39 = $scope.cust_language3 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_language39;    
        }
      
        if($scope.cust_language3 && $scope.cust_language4 && $scope.cust_language1){
          $scope.cust_languagethree13 = $scope.cust_language3 + "," + $scope.cust_language4 + "," +$scope.cust_language1;              
          $scope.personal_details.cust_language = $scope.cust_languagethree13;
        }
        if(($scope.cust_language3 && $scope.cust_language4 && $scope.cust_language5) || ($scope.cust_language1) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9)){
          $scope.cust_languagethree23 = $scope.cust_language3 + "," + $scope.cust_language4 + "," +$scope.cust_language5;              
          $scope.personal_details.cust_language = $scope.cust_languagethree23;
          if($scope.cust_languagethree23 && $scope.cust_language7){
            $scope.cust_languagefour41 = $scope.cust_languagethree23 + "," + $scope.cust_language7;              
            $scope.personal_details.cust_language = $scope.cust_languagefour41;
          }
          
          if($scope.cust_languagethree23 && $scope.cust_language8){
            $scope.cust_languagefour42 = $scope.cust_languagethree23 + "," + $scope.cust_language8;              
            $scope.personal_details.cust_language = $scope.cust_languagefour42;
          }
          if($scope.cust_languagethree23 && $scope.cust_language9){
            $scope.cust_languagefour43 = $scope.cust_languagethree23 + "," + $scope.cust_language9;              
            $scope.personal_details.cust_language = $scope.cust_languagefour43;
          }
          if($scope.cust_languagethree23 && $scope.cust_language1){
            $scope.cust_languagefour44 = $scope.cust_languagethree23 + "," + $scope.cust_language1;              
            $scope.personal_details.cust_language = $scope.cust_languagefour44;
          }
        }
        if($scope.cust_language3 && $scope.cust_language4 && $scope.cust_language6){
          $scope.cust_languagethree33 = $scope.cust_language3 + "," + $scope.cust_language4 + "," +$scope.cust_language6;              
          $scope.personal_details.cust_language = $scope.cust_languagethree33;
        }
        if($scope.cust_language3 && $scope.cust_language4 && $scope.cust_language7){
          $scope.cust_languagethree43 = $scope.cust_language3 + "," + $scope.cust_language4 + "," +$scope.cust_language7;              
          $scope.cust_language = $scope.cust_languagethree43;
        }
        if($scope.cust_language3 && $scope.cust_language4 && $scope.cust_language8){
          $scope.cust_languagethree53 = $scope.cust_language3 + "," + $scope.cust_language4 + "," +$scope.cust_language8;              
          $scope.personal_details.cust_language = $scope.cust_languagethree53;
        }
        if($scope.cust_language3 && $scope.cust_language4 && $scope.cust_language9){
          $scope.cust_languagethree63 = $scope.cust_language3 + "," + $scope.cust_language4 + "," +$scope.cust_language9;              
          $scope.personal_details.cust_language = $scope.cust_languagethree63;
        }
      }
      if($scope.cust_language4 && (($scope.cust_language1) || ($scope.cust_language2) || ($scope.cust_language5) || ($scope.cust_language6) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9))){
        $scope.cust_language45 = $scope.cust_language4 + "," +$scope.cust_language5;
        $scope.personal_details.cust_language = $scope.cust_language45;
        if(($scope.cust_language45 && $scope.cust_language6 && $scope.cust_language7)||  ($scope.cust_language8) || ($scope.cust_language9)){
          $scope.cust_languagefour41 = $scope.cust_language45 + "," +$scope.cust_language6 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_languagefour41;
          if($scope.cust_languagefour41 && $scope.cust_language8){
            $scope.cust_languagefive54 = $scope.cust_languagefour41 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_languagefive54;
          if($scope.cust_languagefive54 && $scope.cust_language9){
            $scope.cust_languageSix65 = $scope.cust_languagefive54 + "," +$scope.cust_language9;
            $scope.personal_details.cust_language = $scope.cust_languageSix65;
          }
          }
        }
        if($scope.cust_language45 && $scope.cust_language7 && $scope.cust_language8){
          $scope.cust_languagefour42 = $scope.cust_language45 + "," +$scope.cust_language7 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_languagefour42;
        }
        if($scope.cust_language45 && $scope.cust_language8 && $scope.cust_language9){
          $scope.cust_languagefour43 = $scope.cust_language45 + "," +$scope.cust_language8 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_languagefour43;
        }
        if($scope.cust_language4 && $scope.cust_language6 ){
          $scope.cust_language46 = $scope.cust_language4 + "," +$scope.cust_language6;
          $scope.personal_details.cust_language = $scope.cust_language46;    
        }
        if($scope.cust_language4 && $scope.cust_language7 ){
          $scope.cust_language47 = $scope.cust_language4 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_language47;    
        }
        if($scope.cust_language4 && $scope.cust_language8 ){
          $scope.cust_language48 = $scope.cust_language4 + "," +$scope.cust_language8;
          $scope.cust_language = $scope.cust_language48;    
        }
        if($scope.cust_language4 && $scope.cust_language9 ){
          $scope.cust_language49 = $scope.cust_language4 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_language49;    
        }
       
        if($scope.cust_language4 && $scope.cust_language5 && $scope.cust_language1){
          $scope.cust_languagethree14 = $scope.cust_language4 + "," + $scope.cust_language5 + "," +$scope.cust_language1;              
          $scope.personal_details.cust_language = $scope.cust_languagethree14;
        }
        if($scope.cust_language4 && $scope.cust_language5 && $scope.cust_language2){
          $scope.cust_languagethree24 = $scope.cust_language4 + "," + $scope.cust_language5 + "," +$scope.cust_language2;              
          $scope.personal_details.cust_language = $scope.cust_languagethree24;
        }
        if(($scope.cust_language4 && $scope.cust_language5 && $scope.cust_language6) || ($scope.cust_language1) || ($scope.cust_language2) || ($scope.cust_language8) || ($scope.cust_language9)){
          $scope.cust_languagethree34 = $scope.cust_language4 + "," + $scope.cust_language5 + "," +$scope.cust_language6;              
          $scope.personal_details.cust_language = $scope.cust_languagethree34;
          if($scope.cust_languagethree34 && $scope.cust_language1 ){
            $scope.cust_languagefour41 = $scope.cust_languagethree34  + "," +$scope.cust_language1;              
            $scope.personal_details.cust_language = $scope.cust_languagefour41;    
          }
          if($scope.cust_languagethree34 && $scope.cust_language2 ){
            $scope.cust_languagefour42 = $scope.cust_languagethree34  + "," +$scope.cust_language2;              
            $scope.personal_details.cust_language = $scope.cust_languagefour42;    
          }
          if($scope.cust_languagethree34 && $scope.cust_language8 ){
            $scope.cust_languagefour43 = $scope.cust_languagethree34  + "," +$scope.cust_language8;              
            $scope.personal_details.cust_language = $scope.cust_languagefour43;    
          }
          if($scope.cust_languagethree34 && $scope.cust_language9 ){
            $scope.cust_languagefour44 = $scope.cust_languagethree34  + "," +$scope.cust_language9;              
            $scope.personal_details.cust_language = $scope.cust_languagefour44;    
          }
        }
        if($scope.cust_language4 && $scope.cust_language5 && $scope.cust_language7){
          $scope.cust_languagethree44 = $scope.cust_language4 + "," + $scope.cust_language5 + "," +$scope.cust_language7;              
          $scope.personal_details.cust_language = $scope.cust_languagethree44;
        }
        if($scope.cust_language4 && $scope.cust_language5 && $scope.cust_language8){
          $scope.cust_languagethree54 = $scope.cust_language4 + "," + $scope.cust_language5 + "," +$scope.cust_language8;              
          $scope.personal_details.cust_language = $scope.cust_languagethree54;
        }
        if($scope.cust_language4 && $scope.cust_language5 && $scope.cust_language9){
          $scope.cust_languagethree64 = $scope.cust_language4 + "," + $scope.cust_language5 + "," +$scope.cust_language9;              
          $scope.personal_details.cust_language = $scope.cust_languagethree64;
        }
      }
      if($scope.cust_language5 && (($scope.cust_language1) || ($scope.cust_language2) || ($scope.cust_language3) || ($scope.cust_language6) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9))){
        $scope.cust_language56 = $scope.cust_language5 + "," +$scope.cust_language6;
        $scope.personal_details.cust_language = $scope.cust_language56;
        if(($scope.cust_language56 && $scope.cust_language7 && $scope.cust_language8) && ($scope.cust_language9)){
          $scope.cust_languagefour41 = $scope.cust_language56 + "," +$scope.cust_language7 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_languagefour41;
          if($scope.cust_languagefour41 && $scope.cust_language9){
            $scope.cust_languagefive55 = $scope.cust_languagefour41 + "," +$scope.cust_language9;
            $scope.personal_details.cust_language = $scope.cust_languagefive55;
          }
        }
        if($scope.cust_language56 && $scope.cust_language8 && $scope.cust_language9){
          $scope.cust_languagefour42 = $scope.cust_language56 + "," +$scope.cust_language8 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_languagefour42;
        }
        if($scope.cust_language5 && $scope.cust_language7 ){
          $scope.cust_language57 = $scope.cust_language5 + "," +$scope.cust_language7;
          $scope.personal_details.cust_language = $scope.cust_language57;    
        }
        if($scope.cust_language5 && $scope.cust_language8 ){
          $scope.cust_language58 = $scope.cust_language5 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_language58;    
        }
        if($scope.cust_language5 && $scope.cust_language9 ){
          $scope.cust_language59 = $scope.cust_language5 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_language59;    
        }
        
        if($scope.cust_language5 && $scope.cust_language6 && $scope.cust_language1){
          $scope.cust_languagethree15 = $scope.cust_language5 + "," + $scope.cust_language6 + "," +$scope.cust_language1;              
          $scope.personal_details.cust_language = $scope.cust_languagethree15;
        }
        if($scope.cust_language5 && $scope.cust_language6 && $scope.cust_language2){
          $scope.cust_languagethree25 = $scope.cust_language5 + "," + $scope.cust_language6 + "," +$scope.cust_language2;              
          $scope.personal_details.cust_language = $scope.cust_languagethree25;
        }
        if($scope.cust_language5 && $scope.cust_language6 && $scope.cust_language3){
          $scope.cust_languagethree35 = $scope.cust_language5 + "," + $scope.cust_language6 + "," +$scope.cust_language3;              
          $scope.personal_details.cust_language = $scope.cust_languagethree35;
        }
        if(($scope.cust_language5 && $scope.cust_language6 && $scope.cust_language7) || ($scope.cust_language1) || ($scope.cust_language2) || ($scope.cust_language3)) {
          $scope.cust_languagethree45 = $scope.cust_language5 + "," + $scope.cust_language6 + "," +$scope.cust_language7;              
          $scope.personal_details.cust_language = $scope.cust_languagethree45;
          if($scope.cust_languagethree45 && $scope.cust_language1){
            $scope.personal_details.cust_languagefour41 = $scope.cust_languagethree45 + "," +$scope.cust_language1;
            $scope.personal_details.cust_language = $scope.cust_languagefour41;
          }
          if($scope.cust_languagethree45 && $scope.cust_language2){
            $scope.cust_languagefour42 = $scope.cust_languagethree45 + "," +$scope.cust_language2;
            $scope.personal_details.cust_language = $scope.cust_languagefour42;
          }
          if($scope.cust_languagethree45 && $scope.cust_language3){
            $scope.cust_languagefour43 = $scope.cust_languagethree45 + "," +$scope.cust_language3;
            $scope.personal_details.cust_language = $scope.cust_languagefour43;
          }
          if($scope.cust_languagethree45 && $scope.cust_language9){
            $scope.cust_languagefour44 = $scope.cust_languagethree45 + "," +$scope.cust_language9;
            $scope.personal_details.cust_language = $scope.cust_languagefour44;
          }
        }
        if($scope.cust_language5 && $scope.cust_language6 && $scope.cust_language8){
          $scope.cust_languagethree55 = $scope.cust_language5 + "," + $scope.cust_language6 + "," +$scope.cust_language8;              
          $scope.personal_details.cust_language = $scope.cust_languagethree55;
        }
        if($scope.cust_language5 && $scope.cust_language6 && $scope.cust_language9){
          $scope.cust_languagethree65 = $scope.cust_language5 + "," + $scope.cust_language6 + "," +$scope.cust_language9;              
          $scope.personal_details.cust_language = $scope.cust_languagethree65;
        }
      }
      if($scope.cust_language6 && (($scope.cust_language1) || ($scope.cust_language2) || ($scope.cust_language3) || ($scope.cust_language4) || ($scope.cust_language7) || ($scope.cust_language8) || ($scope.cust_language9))){
        $scope.cust_language67 = $scope.cust_language6 + "," +$scope.cust_language7;
        $scope.personal_details.cust_language = $scope.cust_language67;
        if($scope.cust_language67 && $scope.cust_language8 && $scope.cust_language9){
          $scope.cust_languagefour41 = $scope.cust_language67 + "," +$scope.cust_language8 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_languagefour41;
        }
        if($scope.cust_language6 && $scope.cust_language8 ){
          $scope.cust_language68 = $scope.cust_language6 + "," +$scope.cust_language8;
          $scope.personal_details.cust_language = $scope.cust_language68;    
        }
        if($scope.cust_language6 && $scope.cust_language9 ){
          $scope.cust_language69 = $scope.cust_language6 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_language69;    
        }
        if($scope.cust_language6 && $scope.cust_language7 && $scope.cust_language1){
          $scope.cust_languagethree16 = $scope.cust_language6 + "," + $scope.cust_language7 + "," +$scope.cust_language1;              
          $scope.personal_details.cust_language = $scope.cust_languagethree16;
        }
        if($scope.cust_language6 && $scope.cust_language7 && $scope.cust_language2){
          $scope.cust_languagethree26 = $scope.cust_language6 + "," + $scope.cust_language7 + "," +$scope.cust_language2;              
          $scope.personal_details.cust_language = $scope.cust_languagethree26;
        }
        if($scope.cust_language6 && $scope.cust_language7 && $scope.cust_language3){
          $scope.cust_languagethree36 = $scope.cust_language6 + "," + $scope.cust_language7 + "," +$scope.cust_language3;              
          $scope.personal_details.cust_language = $scope.cust_languagethree36;
        }
        if($scope.cust_language6 && $scope.cust_language7 && $scope.cust_language4){
          $scope.cust_languagethree46 = $scope.cust_language6 + "," + $scope.cust_language7 + "," +$scope.cust_language4;              
          $scope.personal_details.cust_language = $scope.cust_languagethree46;
        }
        if(($scope.cust_language6 && $scope.cust_language7 && $scope.cust_language8) || ($scope.cust_language1) ||($scope.cust_language2) ||($scope.cust_language3)||($scope.cust_language4) ){
          $scope.cust_languagethree56 = $scope.cust_language6 + "," + $scope.cust_language7 + "," +$scope.cust_language8;              
          $scope.personal_details.cust_language = $scope.cust_languagethree56;
           if($scope.cust_languagethree56 && $scope.cust_language1){
            $scope.cust_languagefour51 =  $scope.cust_languagethree56 + "," +$scope.cust_language1;              
            $scope.personal_details.cust_language =$scope.cust_languagefour51;

           }
           if($scope.cust_languagethree56 && $scope.cust_language2){
            $scope.cust_languagefour52 =  $scope.cust_languagethree56 + "," +$scope.cust_language2;              
            $scope.personal_details.cust_language =$scope.cust_languagefour52;

           }
           if($scope.cust_languagethree56 && $scope.cust_language3){
            $scope.cust_languagefour53 =  $scope.cust_languagethree56 + "," +$scope.cust_language3;              
            $scope.personal_details.cust_language =$scope.cust_languagefour53;

           }
           if($scope.cust_languagethree56 && $scope.cust_language4){
            $scope.cust_languagefour54 =  $scope.cust_languagethree56 + "," +$scope.cust_language4;              
            $scope.personal_details.cust_language =$scope.cust_languagefour54;

           }

        }
        if($scope.cust_language6 && $scope.cust_language7 && $scope.cust_language9){
          $scope.cust_languagethree66 = $scope.cust_language6 + "," + $scope.cust_language7 + "," +$scope.cust_language9;              
          $scope.personal_details.cust_language = $scope.cust_languagethree66;
        }
      }
      if($scope.cust_language7 && (($scope.cust_language1) || ($scope.cust_language2) || ($scope.cust_language3) || ($scope.cust_language4) || ($scope.cust_language5) || ($scope.cust_language8) || ($scope.cust_language9))){
        $scope.cust_language78 = $scope.cust_language7 + "," +$scope.cust_language8;
        $scope.personal_details.cust_language = $scope.cust_language78;
        if($scope.cust_language7 && $scope.cust_language9 ){
          $scope.personal_details.cust_language79 = $scope.cust_language7 + "," +$scope.cust_language9;
          $scope.personal_details.cust_language = $scope.cust_language79;    
        }
        if($scope.cust_language7 && $scope.cust_language8 && $scope.cust_language1){
          $scope.cust_languagethree17 = $scope.cust_language7 + "," + $scope.cust_language8 + "," +$scope.cust_language1;              
          $scope.personal_details.cust_language = $scope.cust_languagethree17;
        }
        if($scope.cust_language7 && $scope.cust_language8 && $scope.cust_language2){
          $scope.cust_languagethree27 = $scope.cust_language7 + "," + $scope.cust_language8 + "," +$scope.cust_language2;              
          $scope.personal_details.cust_language = $scope.cust_languagethree27;
        }
        if($scope.cust_language7 && $scope.cust_language8 && $scope.cust_language3){
          $scope.cust_languagethree37 = $scope.cust_language7 + "," + $scope.cust_language8 + "," +$scope.cust_language3;              
          $scope.personal_details.cust_language = $scope.cust_languagethree37;
        }
        if($scope.cust_language7 && $scope.cust_language8 && $scope.cust_language4){
          $scope.cust_languagethree47 = $scope.cust_language7 + "," + $scope.cust_language8 + "," +$scope.cust_language4;              
          $scope.personal_details.cust_language = $scope.cust_languagethree47;
        }
        if($scope.cust_language7 && $scope.cust_language8 && $scope.cust_language5){
          $scope.cust_languagethree57 = $scope.cust_language7 + "," + $scope.cust_language8 + "," +$scope.cust_language5;              
          $scope.personal_details.cust_language = $scope.cust_languagethree57;
        }
        if($scope.cust_language7 && $scope.cust_language8 && $scope.cust_language9){
          $scope.cust_languagethree67 = $scope.cust_language7 + "," + $scope.cust_language8 + "," +$scope.cust_language9;              
          $scope.personal_details.cust_language = $scope.cust_languagethree67;
        }
      }
      if($scope.cust_language8 && $scope.cust_language9){
        $scope.cust_language89 = $scope.cust_language8 + "," +$scope.cust_language9;
        $scope.personal_details.cust_language = $scope.cust_language89;
      }
      if(key == "Urdu"){
        $scope.language3 = key;  
        $scope.cust_language3 = $scope.language3; 
        $scope.personal_details.cust_language = $scope.cust_language3;  
      }
      if(key == "Punjabi"){
        $scope.language4 = key;
        $scope.cust_language4 = $scope.language4; 
        $scope.personal_details.cust_language = $scope.cust_language4;   
      }
      if(key == "Bengali"){
        $scope.language5 = key; 
        $scope.cust_language5 = $scope.language5;  
        $scope.personal_details.cust_language = $scope.cust_language5; 
      }
      if(key == "Gujrati"){
        $scope.language6 = key;  
        $scope.cust_language6 = $scope.language6; 
        $scope.personal_details.cust_language = $scope.cust_language6; 
      }
      if(key == "Malayalam"){
        $scope.language7 = key;   
        $scope.cust_language7 = $scope.language7;
        $scope.personal_details.cust_language = $scope.cust_language7; 
      }
      if(key == "Telgu"){
        $scope.language8 = key;
        $scope.cust_language8 = $scope.language8;
        $scope.personal_details.cust_language = $scope.cust_language8; 
      }
      if(key == "Tamil"){
        $scope.language9 = key;  
        $scope.cust_language9 = $scope.language9; 
        $scope.personal_details.cust_language = $scope.cust_language9; 
      }
 }
 
} 
var livingsituation = $scope.livingsituationdata;
for(var i=0; i<4; i++ )
{
var id = [i];
var key = Object.keys(livingsituation)[id];
var value = livingsituation[key];
if(value == false){
  $scope.cust_living_situation= "";
  if($scope.cust_living_situation == ""){
    $scope.errordata = "Select Living Situation";
  }
}
if(value == true)
{  
     if(key == "Alone"){
       $scope.language1 = key;
       $scope.cust_living_situation1 = $scope.language1;
       $scope.personal_details.cust_living_situation = $scope.cust_living_situation1;
     }
     if(key == "Spouse"){
       $scope.language2 = key;  
       $scope.cust_living_situation2 = $scope.language2; 
       $scope.cust_living_situation = $scope.cust_living_situation2;  
     }
     if($scope.cust_living_situation1 && (($scope.cust_living_situation2)|| ($scope.cust_living_situation3)) || ($scope.cust_living_situation4) || ($scope.cust_living_situation5)){
       $scope.cust_living_situation12 = $scope.cust_living_situation1 + "," +$scope.cust_living_situation2;
       $scope.cust_living_situation = $scope.cust_living_situation12;
       if(($scope.cust_living_situation12) && ($scope.cust_living_situation3)||($scope.cust_living_situation4)){
        $scope.cust_living_situation123 = $scope.cust_living_situation12 + "," +$scope.cust_living_situation3;
        $scope.cust_living_situation = $scope.cust_living_situation123;
        if(($scope.cust_living_situation123) && ($scope.cust_living_situation4)||($scope.cust_living_situation5)){
          $scope.cust_living_situationfour1 = $scope.cust_living_situation123 + "," +$scope.cust_living_situation4;
          $scope.cust_living_situation = $scope.cust_living_situationfour1;
          if(($scope.cust_living_situationfour1) && ($scope.cust_living_situation5)){
            $scope.cust_living_situationfive1 = $scope.cust_living_situationfour1 + "," +$scope.cust_living_situation5;
            $scope.cust_living_situation = $scope.cust_living_situationfive1;
           }
         }
         if(($scope.cust_living_situation123) && ($scope.cust_living_situation5)){
          $scope.cust_living_situationfour2 = $scope.cust_living_situation123 + "," +$scope.cust_living_situation5;
          $scope.cust_living_situation = $scope.cust_living_situationfour2;
         }
       }
       if(($scope.cust_living_situation12) && ($scope.cust_living_situation4)){
        $scope.cust_living_situation124 = $scope.cust_living_situation12 + "," +$scope.cust_living_situation4;
        $scope.cust_living_situation = $scope.cust_living_situation124;
       }
       if(($scope.cust_living_situation12) && ($scope.cust_living_situation5)){
        $scope.cust_living_situation125 = $scope.cust_living_situation12 + "," +$scope.cust_living_situation5;
        $scope.cust_living_situation = $scope.cust_living_situation125;
       }
       if(($scope.cust_living_situation1) && ($scope.cust_living_situation3)){
        $scope.cust_living_situation13 = $scope.cust_living_situation1 + "," +$scope.cust_living_situation3;
        $scope.cust_living_situation = $scope.cust_living_situation13;
       }
       if(($scope.cust_living_situation1) && ($scope.cust_living_situation4)){
        $scope.cust_living_situation14 = $scope.cust_living_situation1 + "," +$scope.cust_living_situation4;
        $scope.cust_living_situation = $scope.cust_living_situation14;
       }
       if(($scope.cust_living_situation1) && ($scope.cust_living_situation5)){
        $scope.cust_living_situation15 = $scope.cust_living_situation1 + "," +$scope.cust_living_situation5;
        $scope.cust_living_situation = $scope.cust_living_situation15;
       }
     }
     if($scope.cust_living_situation2 && (($scope.cust_living_situation3)|| ($scope.cust_living_situation1)) || ($scope.cust_living_situation4) || ($scope.cust_living_situation5)){
      $scope.cust_living_situation23 = $scope.cust_living_situation2 + "," +$scope.cust_living_situation3;
      $scope.cust_living_situation = $scope.cust_living_situation23;
      if(($scope.cust_living_situation23) && ($scope.cust_living_situation4)){
        $scope.cust_living_situation234 = $scope.cust_living_situation23 + "," +$scope.cust_living_situation4;
        $scope.cust_living_situation = $scope.cust_living_situation234;
       }
       if(($scope.cust_living_situation23) && ($scope.cust_living_situation5)){
        $scope.cust_living_situation235 = $scope.cust_living_situation23 + "," +$scope.cust_living_situation5;
        $scope.cust_living_situation = $scope.cust_living_situation235;
       }
      if(($scope.cust_living_situation2) && ($scope.cust_living_situation4)){
        $scope.cust_living_situation24 = $scope.cust_living_situation2 + "," +$scope.cust_living_situation4;
        $scope.cust_living_situation = $scope.cust_living_situation24;
       }
       if(($scope.cust_living_situation2) && ($scope.cust_living_situation5)){
        $scope.cust_living_situation25 = $scope.cust_living_situation2 + "," +$scope.cust_living_situation5;
        $scope.cust_living_situation = $scope.cust_living_situation25;
       }
    }
    if(($scope.cust_living_situation3) && ($scope.cust_living_situation4)|| ($scope.cust_living_situation5)|| ($scope.cust_living_situation1)){
      $scope.cust_living_situation34 = $scope.cust_living_situation3 + "," +$scope.cust_living_situation4;
      $scope.cust_living_situation = $scope.cust_living_situation34;
      if(($scope.cust_living_situation34) && ($scope.cust_living_situation1)){
        $scope.cust_living_situation341 = $scope.cust_living_situation34 + "," +$scope.cust_living_situation1;
        $scope.cust_living_situation = $scope.cust_living_situation341;
       }
       if(($scope.cust_living_situation34) && ($scope.cust_living_situation5)){
        $scope.cust_living_situation345 = $scope.cust_living_situation34 + "," +$scope.cust_living_situation5;
        $scope.cust_living_situation = $scope.cust_living_situation345;
       }
      if(($scope.cust_living_situation3) && ($scope.cust_living_situation5)){
        $scope.cust_living_situation35 = $scope.cust_living_situation3 + "," +$scope.cust_living_situation5;
        $scope.cust_living_situation = $scope.cust_living_situation35;
       }
     }
     if(($scope.cust_living_situation4) && ($scope.cust_living_situation5)||($scope.cust_living_situation1)||($scope.cust_living_situation2)){
      $scope.cust_living_situation45 = $scope.cust_living_situation4 + "," +$scope.cust_living_situation5;
      $scope.cust_living_situation = $scope.cust_living_situation45;
      if(($scope.cust_living_situation45) && ($scope.cust_living_situation1)){
        $scope.cust_living_situation451 = $scope.cust_living_situation45 + "," +$scope.cust_living_situation1;
        $scope.cust_living_situation = $scope.cust_living_situation451;
       }
       if(($scope.cust_living_situation45) && ($scope.cust_living_situation2)){
        $scope.cust_living_situation452 = $scope.cust_living_situation45 + "," +$scope.cust_living_situation2;
        $scope.cust_living_situation = $scope.cust_living_situation452;
       }
     }
       
     if(key == "Son"){
       $scope.language3 = key;  
       $scope.cust_living_situation3 = $scope.language3; 
       $scope.cust_living_situation = $scope.cust_living_situation3;  
     }
     if(key == "Daughter"){
       $scope.language4 = key;
       $scope.cust_living_situation4 = $scope.language4; 
       $scope.cust_living_situation = $scope.cust_living_situation4;   
     }
     if(key == "Helper"){
       $scope.language5 = key; 
       $scope.cust_living_situation5 = $scope.language5;  
       $scope.cust_living_situation = $scope.cust_living_situation5; 
     }
     
   
}
}
var religion =  $scope.religion;
for(var i=0; i<7; i++ )
{
var id = [i];
var key = Object.keys(religion)[id];
var value = religion[key];
if(value == true)
{  
     if(key == "Atheist/Agnostic"){
       $scope.language1 = key;
       $scope.cust_religion1 = $scope.language1;
       $scope.cust_religion = $scope.cust_religion1;
     }
     if(key == "Buddhism"){
       $scope.language2 = key;  
       $scope.cust_religion2 = $scope.language2; 
       $scope.cust_religion = $scope.cust_religion2;  
     }
     if($scope.cust_religion1 && (($scope.cust_religion2)|| ($scope.cust_religion3) || ($scope.cust_religion4) || ($scope.cust_religion5)|| ($scope.cust_religion6) || ($scope.cust_religion7))){
       $scope.cust_religion12 = $scope.cust_religion1 + "," +$scope.cust_religion2;
       $scope.cust_religion = $scope.cust_religion12;
       if(($scope.cust_religion12) && ($scope.cust_religion3) && ($scope.cust_religion4) || ($scope.cust_religion5) || (($scope.cust_religion6) || ($scope.cust_religion7))){
        $scope.cust_religionfour12 = $scope.cust_religion12 + "," +$scope.cust_religion3+ "," +$scope.cust_religion4;
        $scope.cust_religion = $scope.cust_religionfour12;
        if($scope.cust_religionfour12 && ($scope.cust_religion5) || (($scope.cust_religion6) ||(($scope.cust_religion7)))){
          $scope.cust_religionfive1 = $scope.cust_religionfour12 + "," +$scope.cust_religion5;
          $scope.cust_religion = $scope.cust_religionfive1;
          if( $scope.cust_religionfive1 && ( $scope.cust_religion6) || ($scope.cust_religion7)){
            $scope.cust_religionSix1 = $scope.cust_religionfive1 + "," +$scope.cust_religion6;
            $scope.cust_religion = $scope.cust_religionSix1;
            if($scope.cust_religionSix1 && $scope.cust_religion7){
              $scope.cust_religionSeven1 = $scope.cust_religionSix1 + "," +$scope.cust_religion7;
              $scope.cust_religion = $scope.cust_religionSeven1;
            }
          }
        }
       }
       if(($scope.cust_religion12) && (($scope.cust_religion4) && ($scope.cust_religion5))){
        $scope.cust_religionfour13 = $scope.cust_religion12 + "," +$scope.cust_religion4+ "," +$scope.cust_religion5;
        $scope.cust_religion = $scope.cust_religionfour13;
       }
       if(($scope.cust_religion12) && (($scope.cust_religion5) && ($scope.cust_religion6))){
        $scope.cust_religionfour14 = $scope.cust_religion12 + "," +$scope.cust_religion5+ "," +$scope.cust_religion6;
        $scope.cust_religion = $scope.cust_religionfour14;
       }
       if(($scope.cust_religion12) && (($scope.cust_religion6) && ($scope.cust_religion7))){
        $scope.cust_religionfour15 = $scope.cust_religion12 + "," +$scope.cust_religion6+ "," +$scope.cust_religion7;
        $scope.cust_religion = $scope.cust_religionfour15;
       }
        if($scope.cust_religion12 && ($scope.cust_religion3)||($scope.cust_religion4)||($scope.cust_religion5)||($scope.cust_religion6)||($scope.cust_religion7)){
          $scope.cust_religion123 = $scope.cust_religion12 + "," +$scope.cust_religion3;
          $scope.cust_religion = $scope.cust_religion123;
          if($scope.cust_religion123 && ($scope.cust_religion4)){
            $scope.cust_religionfour1 = $scope.cust_religion123 + "," +$scope.cust_religion4;
            $scope.cust_religion = $scope.cust_religionfour1;
          }
          if($scope.cust_religion123 && ($scope.cust_religion5)){
            $scope.cust_religionfour2 = $scope.cust_religion123 + "," +$scope.cust_religion5;
            $scope.cust_religion = $scope.cust_religionfour2;
          }
          if($scope.cust_religion123 && ($scope.cust_religion6)){
            $scope.cust_religionfour3 = $scope.cust_religion123 + "," +$scope.cust_religion6;
            $scope.cust_religion = $scope.cust_religionfour3;
          }
          if($scope.cust_religion123 && ($scope.cust_religion7)){
            $scope.cust_religionfour4 = $scope.cust_religion123 + "," +$scope.cust_religion7;
            $scope.cust_religion = $scope.cust_religionfour4;
          }
        }
        if($scope.cust_religion12 && ($scope.cust_religion4)){
          $scope.cust_religion124 = $scope.cust_religion12 + "," +$scope.cust_religion4;
          $scope.cust_religion = $scope.cust_religion124;
        }
        if($scope.cust_religion12 && ($scope.cust_religion5)){
          $scope.cust_religion125 = $scope.cust_religion12 + "," +$scope.cust_religion5;
          $scope.cust_religion = $scope.cust_religion125;
        }
        if($scope.cust_religion12 && ($scope.cust_religion6)){
          $scope.cust_religion126 = $scope.cust_religion12 + "," +$scope.cust_religion6;
          $scope.cust_religion = $scope.cust_religion126;
        }
        if($scope.cust_religion12 && ($scope.cust_religion7)){
          $scope.cust_religion127 = $scope.cust_religion12 + "," +$scope.cust_religion7;
          $scope.cust_religion = $scope.cust_religion127;
        }
       if(($scope.cust_religion1) && ($scope.cust_religion3)){
        $scope.cust_religion13 = $scope.cust_religion1 + "," +$scope.cust_religion3;
        $scope.cust_religion = $scope.cust_religion13;
       }
       if(($scope.cust_religion1) && ($scope.cust_religion4)){
        $scope.cust_religion14 = $scope.cust_religion1 + "," +$scope.cust_religion4;
        $scope.cust_religion = $scope.cust_religion14;
       }
       if(($scope.cust_religion1) && ($scope.cust_religion5)){
        $scope.cust_religion15 = $scope.cust_religion1 + "," +$scope.cust_religion5;
        $scope.cust_religion = $scope.cust_religion15;
       }
       if(($scope.cust_religion1) && ($scope.cust_religion6)){
        $scope.cust_religion16 = $scope.cust_religion1 + "," +$scope.cust_religion6;
        $scope.cust_religion = $scope.cust_religion16;
       }
       if(($scope.cust_religion1) && ($scope.cust_religion7)){
        $scope.cust_religion17 = $scope.cust_religion1 + "," +$scope.cust_religion7;
        $scope.cust_religion = $scope.cust_religion17;
       }
     }
     if($scope.cust_religion2 && (($scope.cust_religion3)|| ($scope.cust_religion4) || ($scope.cust_religion5)|| ($scope.cust_religion6) || ($scope.cust_religion7))){
      $scope.cust_religion23 = $scope.cust_religion2 + "," +$scope.cust_religion3;
      $scope.cust_religion = $scope.cust_religion23;
      if(($scope.cust_religion23) && ($scope.cust_religion4)){
        $scope.cust_religion234 = $scope.cust_religion23 + "," +$scope.cust_religion4;
        $scope.cust_religion = $scope.cust_religion234;
       }
       if(($scope.cust_religion23) && ($scope.cust_religion5)){
        $scope.cust_religion235 = $scope.cust_religion23 + "," +$scope.cust_religion5;
        $scope.cust_religion = $scope.cust_religion235;
       }
      if(($scope.cust_religion2) && ($scope.cust_religion4)){
       $scope.cust_religion24 = $scope.cust_religion2 + "," +$scope.cust_religion4;
       $scope.cust_religion = $scope.cust_religion24;
      }
      if(($scope.cust_religion2) && ($scope.cust_religion5)){
       $scope.cust_religion25 = $scope.cust_religion2 + "," +$scope.cust_religion5;
       $scope.cust_religion = $scope.cust_religion25;
      }
      if(($scope.cust_religion2) && ($scope.cust_religion6)){
       $scope.cust_religion26 = $scope.cust_religion2 + "," +$scope.cust_religion6;
       $scope.cust_religion = $scope.cust_religion26;
      }
      if(($scope.cust_religion2) && ($scope.cust_religion7)){
       $scope.cust_religion27 = $scope.cust_religion2 + "," +$scope.cust_religion7;
       $scope.cust_religion = $scope.cust_religion27;
      }
    }
    if($scope.cust_religion3 && (($scope.cust_religion4)|| ($scope.cust_religion5)|| ($scope.cust_religion6) || ($scope.cust_religion7))){
      $scope.cust_religion34 = $scope.cust_religion3 + "," +$scope.cust_religion4;
      $scope.cust_religion = $scope.cust_religion34;
      if(($scope.cust_religion3) && ($scope.cust_religion5)){
       $scope.cust_religion35 = $scope.cust_religion3 + "," +$scope.cust_religion5;
       $scope.cust_religion = $scope.cust_religion35;
      }
      if(($scope.cust_religion3) && ($scope.cust_religion6)){
       $scope.cust_religion36 = $scope.cust_religion3 + "," +$scope.cust_religion6;
       $scope.cust_religion = $scope.cust_religion36;
      }
      if(($scope.cust_religion3) && ($scope.cust_religion7)){
       $scope.cust_religion37 = $scope.cust_religion3 + "," +$scope.cust_religion7;
       $scope.cust_religion = $scope.cust_religion37;
      }
    }
    if($scope.cust_religion4 && (($scope.cust_religion5)|| ($scope.cust_religion6) || ($scope.cust_religion7))){
      $scope.cust_religion45 = $scope.cust_religion4 + "," +$scope.cust_religion5;
      $scope.cust_religion = $scope.cust_religion34;
      if(($scope.cust_religion4) && ($scope.cust_religion6)){
       $scope.cust_religion46 = $scope.cust_religion4 + "," +$scope.cust_religion6;
       $scope.cust_religion = $scope.cust_religion46;
      }
      if(($scope.cust_religion4) && ($scope.cust_religion7)){
       $scope.cust_religion47 = $scope.cust_religion4 + "," +$scope.cust_religion7;
       $scope.cust_religion = $scope.cust_religion47;
      }
    }
    if($scope.cust_religion5 && (($scope.cust_religion6) || ($scope.cust_religion7))){
      $scope.cust_religion56 = $scope.cust_religion5 + "," +$scope.cust_religion6;
      $scope.cust_religion = $scope.cust_religion56;
      if(($scope.cust_religion5) && ($scope.cust_religion7)){
       $scope.cust_religion57 = $scope.cust_religion5 + "," +$scope.cust_religion7;
       $scope.cust_religion = $scope.cust_religion57;
      }
    }
    if($scope.cust_religion6 && (($scope.cust_religion7))){
      $scope.cust_religion67 = $scope.cust_religion6 + "," +$scope.cust_religion7;
      $scope.cust_religion = $scope.cust_religion67;
    }
     if(key == "Christianity"){
       $scope.language3 = key;  
       $scope.cust_religion3 = $scope.language3; 
       $scope.cust_religion = $scope.cust_religion3;  
     }
     if(key == "Hinduism"){
       $scope.language4 = key;
       $scope.cust_religion4 = $scope.language4; 
       $scope.cust_religion = $scope.cust_religion4;   
     }
     if(key == "Islam"){
       $scope.language5 = key; 
       $scope.cust_religion5 = $scope.language5;  
       $scope.cust_religion = $scope.cust_religion5; 
     }
     if(key == "Jainism"){
      $scope.language6 = key; 
      $scope.cust_religion5 = $scope.language6;  
      $scope.cust_religion = $scope.cust_religion6; 
    } 
    if(key == "Sikhism"){
      $scope.language7 = key; 
      $scope.cust_religion5 = $scope.language7;  
      $scope.cust_religion = $scope.cust_religion7; 
    }  
}
}
var riskassessment1 =  $scope.riskassessment1data;
for(var i=0; i<2; i++ )
{
var id = [i];
var key = Object.keys(riskassessment1)[id];
var value =riskassessment1[key];
if(value == true)
{  
     if(key == "Yes"){
       $scope.language1 = value;
       $scope.cust_risk_assessment_1 = $scope.language1;
      //  $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
     }
     if(key == "No"){
      $scope.language1 = value;
      $scope.cust_risk_assessment_1 = $scope.language1;
      // $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
    } 
}
}
var riskassessment2 =  $scope.riskassessment2data;
for(var i=0; i<2; i++ )
{
var id = [i];
var key = Object.keys(riskassessment2)[id];
var value =riskassessment2[key];
if(value == true)
{  
     if(key == "Yes"){
       $scope.language2 = value;
       $scope.cust_risk_assessment_2 = $scope.language2;
      //  $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
     }
     if(key == "No"){
      $scope.language2 = value;
      $scope.cust_risk_assessment_2 = $scope.language2;
      // $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
    } 
}
}
var riskassessment3 =  $scope.riskassessment3data;
for(var i=0; i<2; i++ )
{
var id = [i];
var key = Object.keys(riskassessment3)[id];
var value =riskassessment3[key];
if(value == true)
{  
     if(key == "Yes"){
       $scope.language3 = value;
       $scope.cust_risk_assessment_3 = $scope.language3;
      //  $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
     }
     if(key == "No"){
      $scope.language3 = value;
      $scope.cust_risk_assessment_3 = $scope.language3;
      // $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
    } 
}
}
var riskassessment4 =  $scope.riskassessment4data;
for(var i=0; i<2; i++ )
{
var id = [i];
var key = Object.keys(riskassessment4)[id];
var value =riskassessment4[key];
if(value == true)
{  
     if(key == "Yes"){
       $scope.language4 = value;
       $scope.cust_risk_assessment_4 = $scope.language4;
      //  $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
     }
     if(key == "No"){
      $scope.language4 = value;
      $scope.cust_risk_assessment_4 = $scope.language4;
      // $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
    } 
}
}
var riskassessment5 =  $scope.riskassessment5data;
for(var i=0; i<2; i++ )
{
var id = [i];
var key = Object.keys(riskassessment5)[id];
var value =riskassessment5[key];
if(value == true)
{  
     if(key == "Yes"){
       $scope.language5 = value;
       $scope.cust_risk_assessment_5 = $scope.language5;
      //  $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
     }
     if(key == "No"){
      $scope.language5 = value;
      $scope.cust_risk_assessment_5 = $scope.language5;
      // $scope.cust_risk_assessment_1 = $scope.cust_risk_assessment_12;
    } 
}
}
  $scope.preferredlanguagedata = $scope.preferredlanguageOther;
  if($scope.preferredlanguagedata){
    $scope.personal_details.cust_language = $scope.preferredlanguagedata;
  }; 

  $scope.personal_details.cust_dob =  $filter('date')(new Date($scope.dob), "yyyy-MM-dd");
   $scope.personal_details.cust_gender = $scope.customerIdDetailsData[0].cust_gender;
   $scope.personal_details.cust_marital_status = $scope.customerIdDetailsData[0].cust_marital_status;
   $scope.personal_details.cust_dom = $filter('date')(new Date($scope.dom), "yyyy-MM-dd");
   $scope.personal_details.cust_living_place = ""; 
   $scope.personal_details.cust_category = "";
  //  $scope.cust_living_situation = $scope.personal_details.cust_living_situation;
   $scope.personal_details.cust_staying_with = $scope.customerIdDetailsData[0].cust_statying_with;
   $scope.personal_details.cust_family_member_1 = $scope.familymemebername1 + "," + $scope.familymemeberage1 + "," + $scope.familymemeberrelation1 + "," + $scope.familymemeberremark1 ;
   $scope.personal_details.cust_family_member_2 = $scope.familymemebername2 + "," + $scope.familymemeberage2 + "," + $scope.familymemeberrelation2 + "," + $scope.familymemeberremark2;
   $scope.personal_details.cust_family_member_3 = $scope.familymemebername3 + "," + $scope.familymemeberage3 + "," + $scope.familymemeberrelation3 + "," + $scope.familymemeberremark3;
   $scope.personal_details.cust_education_1 = $scope.degree1 +"," + $scope.year1 + "," + $scope.university1 ;
   $scope.personal_details.cust_education_2 = $scope.degree2 +"," + $scope.year2 + "," + $scope.university2 ;
   $scope.personal_details.cust_education_3 = $scope.degree3 +"," + $scope.year3 + "," + $scope.university3 ;
   $scope.personal_details.cust_asset_1 = $scope.customerIdDetailsData[0].cust_asset_1.split(',')[0] + "," + $scope.details1 +"," + $scope.value1;
   $scope.personal_details.cust_asset_2 = $scope.customerIdDetailsData[0].cust_asset_2.split(',')[0] + "," + $scope.details2 +"," + $scope.value2;
   $scope.personal_details.cust_asset_3 = $scope.customerIdDetailsData[0].cust_asset_3.split(',')[0] + "," + $scope.details3 +"," + $scope.value3;

   
  $scope.religiouspreferencevalue = $scope.religiouspreferenceeOther;
  if($scope.religiouspreferencevalue){
    $scope.personal_details.cust_religion = $scope.religiouspreferencevalue;
  }
  $scope.cust_religion = "Hinduism";
  $scope.personal_details.cust_living_situation ="Alone";
 $scope.livingsituationvalue = $scope.livingsituationOther;
 if($scope.livingsituationvalue){
   $scope.personal_details.cust_living_situation = $scope.livingsituationvalue;
 }

//  $scope.cust_risk_assessment_1 = "true";
//  $scope.cust_risk_assessment_2 = "true";
//  $scope.cust_risk_assessment_3 = "false";
//  $scope.cust_risk_assessment_4 = "true";
//  $scope.cust_risk_assessment_5 = "true";
 

 editCustomerDetailsService.personalupdate($scope.personal_details.prefered_name,$scope.cust_id,$scope.personal_details.user_email,$scope.personal_details.cust_address,$scope.personal_details.cust_community,$scope.personal_details.cust_geolocation,$scope.personal_details.cust_height,$scope.personal_details.cust_weight,$scope.personal_details.cust_language,$scope.personal_details.cust_dob,$scope.personal_details.cust_gender,$scope.personal_details.cust_marital_status,$scope.personal_details.cust_dom,$scope.personal_details.cust_category,$scope.personal_details.cust_staying_with,$scope.personal_details.cust_family_member_1,$scope.personal_details.cust_family_member_2,$scope.personal_details.cust_family_member_3,$scope.personal_details.cust_education_1,$scope.personal_details.cust_education_2,$scope.personal_details.cust_education_3,$scope.personal_details.cust_asset_1,$scope.personal_details.cust_asset_2,$scope.personal_details.cust_asset_3,$scope.personal_details.cust_religion,$scope.personal_details.cust_living_situation,$scope.personal_details.cust_risk_assessment_1,$scope.personal_details.cust_risk_assessment_2,$scope.personal_details.cust_risk_assessment_3,$scope.personal_details.cust_risk_assessment_4,$scope.personal_details.cust_risk_assessment_5).success(function (result) {
        
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

    editCustomerDetailsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('editCustomerDetailsController', editCustomerDetailsController)
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