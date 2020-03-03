'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addCareCoordinatorService'];
  var addCareCoordinatorController = function ($scope,$rootScope,$location,$filter,addCareCoordinatorService) {


    $scope.init = function(){
      $scope.date = null;
      $scope.datepickerOptions = {
        minDate: new Date('1890-01-01'),
        initDate: new Date()
      };
     
    };

    $scope.albums = [{
      selected:false,
      name: 'Hindi'
    },
    {
      selected:false,
      name: 'English'
    }];
   

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

 

  //   $scope.clicked = function(){
  //     alert("Manager Added Successfully");
  // }

  $scope.addCareCoordinatordata = {
        ccd_name:"",
        ccd_mob:"",
        ccd_alt_mob_no:"",
        ccd_email:"",
        ccd_address:"",
        ccd_dob:"",
        ccd_gender:"",
        ccd_language:"",
        ccd_education_1:"",
        ccd_education_2:"",
        ccd_education_3:"",
        password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
        user_type:"care co-ordinator",
        year1 :  "",
        year2 :  "" ,
        year3 :  "" , 
        university1: "", 
        university2: "", 
        university3: "",    
  }

  $scope.addCareCoordinator = function(){
     $scope.ccd_name = $scope.addCareCoordinatordata.ccd_name;
     $scope.ccd_mob = "91" + $scope.addCareCoordinatordata.ccd_mob;
    //  $scope.comm_id = $scope.addCommunityManagerdata.comm_id;
     $scope.ccd_alt_mob_no = "91" + $scope.addCareCoordinatordata.ccd_alt_mob_no;
     $scope.ccd_email = $scope.addCareCoordinatordata.ccd_email;
     $scope.ccd_address = $scope.addCareCoordinatordata.ccd_address + "," + $scope.addCareCoordinatordata.ccd_address1;
    //  $scope.clm_dob = new Date($scope.addClusterManagerdata.clm_dob); 
     $scope.ccd_dob =$filter('date')(new Date($scope.addCareCoordinatordata.ccd_dob), "yyyy-MM-dd"); 
     $scope.addCareCoordinatordata.ccd_gender = $scope.selectedgender.name; 
     $scope.ccd_gender = $scope.addCareCoordinatordata.ccd_gender;
  
    
    $scope.albumNameArray = [];
     
    angular.forEach($scope.albums, function(album){
    
      if (album.selected ==true) {   
       $scope.language1 = "";
       $scope.language2 = "";  
        $scope.albumNameArray.push(album.name);
        if($scope.albumNameArray[0]){
         $scope.language1 = $scope.albumNameArray[0] ; 
         $scope.ccd_language = $scope.language1;
           if($scope.albumNameArray[1]){
             $scope.language2 = $scope.albumNameArray[1] ; 
         $scope.ccd_language = $scope.language1 + "," + $scope.language2;
         
           }
           
        }
        
      }
    });
   $scope.language = $scope.languageOther;
   if($scope.language){
     $scope.ccd_language = $scope.language;
   }
   
     $scope.ccd_education_1 = $scope.addCareCoordinatordata.ccd_education_1 + "," + $scope.addCareCoordinatordata.year1 +"," + $scope.addCareCoordinatordata.university1 ;
     $scope.ccd_education_2 = $scope.addCareCoordinatordata.ccd_education_2 + "," + $scope.addCareCoordinatordata.year2 + "," + $scope.addCareCoordinatordata.university2;
     $scope.ccd_education_3 = $scope.addCareCoordinatordata.ccd_education_3 + "," + $scope.addCareCoordinatordata.year3 + "," + $scope.addCareCoordinatordata.university3;
     $scope.password = $scope.addCareCoordinatordata.password;
     $scope.user_type = $scope.addCareCoordinatordata.user_type;
     
     addCareCoordinatorService.addCareCoordinator($scope.ccd_name,$scope.ccd_mob,$scope.ccd_alt_mob_no, $scope.ccd_email,$scope.ccd_address,$scope.ccd_dob,$scope.ccd_gender,$scope.ccd_language,$scope.ccd_education_1,$scope.ccd_education_2,$scope.ccd_education_3,$scope.password,$scope.user_type).success(function (result) {
        
        if (result) {
       alert(result);
         
        }
       
      });

  }
    };

    addCareCoordinatorController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCareCoordinatorController', addCareCoordinatorController)
  })();