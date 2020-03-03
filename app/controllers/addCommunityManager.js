'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addCommunityManagerService'];
  var addCommunityManagerController = function ($scope,$rootScope,$location,$filter,addCommunityManagerService) {


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

  $scope.addCommunityManagerdata = {
    
      cm_name: "",
      // comm_id: "",
      cm_mob:"",
      cm_alt_mob_no:"",
      cm_email:"",
      cm_address:"",
      cm_dob:"",
      cm_gender:"",
      cm_language:"",
      cm_education_1 :"",
      cm_education_2:"",
      cm_education_3:"",
      password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
      user_type:"Community manager",
      year1 :  "",
      year2 :  "" ,
      year3 :  "" , 
      university1: "", 
      university2: "", 
      university3: "",    
  }

  $scope.addCommunityManager = function(){
     $scope.cm_name = $scope.addCommunityManagerdata.cm_name;
     $scope.cm_mob = "91" + $scope.addCommunityManagerdata.cm_mob;
    //  $scope.comm_id = $scope.addCommunityManagerdata.comm_id;
     $scope.cm_alt_mob_no = "91" + $scope.addCommunityManagerdata.cm_alt_mob_no;
     $scope.cm_email = $scope.addCommunityManagerdata.cm_email;
     $scope.cm_address = $scope.addCommunityManagerdata.cm_address + "," + $scope.addCommunityManagerdata.cm_address1;
    //  $scope.clm_dob = new Date($scope.addClusterManagerdata.clm_dob); 
     $scope.cm_dob =$filter('date')(new Date($scope.addCommunityManagerdata.cm_dob), "yyyy-MM-dd"); 
     $scope.addCommunityManagerdata.cm_gender = $scope.selectedgender.name; 
     $scope.cm_gender = $scope.addCommunityManagerdata.cm_gender;
  
    
    $scope.albumNameArray = [];
     
    angular.forEach($scope.albums, function(album){
    
      if (album.selected ==true) {   
       $scope.language1 = "";
       $scope.language2 = "";  
        $scope.albumNameArray.push(album.name);
        if($scope.albumNameArray[0]){
         $scope.language1 = $scope.albumNameArray[0] ; 
         $scope.cm_language = $scope.language1;
           if($scope.albumNameArray[1]){
             $scope.language2 = $scope.albumNameArray[1] ; 
         $scope.cm_language = $scope.language1 + "," + $scope.language2;
         
           }
           
        }
        
      }
    });
   $scope.language = $scope.languageOther;
   if($scope.language){
     $scope.cm_language = $scope.language;
   }
   
     $scope.cm_education_1 = $scope.addCommunityManagerdata.cm_education_1 + "," + $scope.addCommunityManagerdata.year1 +"," + $scope.addCommunityManagerdata.university1 ;
     $scope.cm_education_2 = $scope.addCommunityManagerdata.cm_education_2 + "," + $scope.addCommunityManagerdata.year2 + "," + $scope.addCommunityManagerdata.university2;
     $scope.cm_education_3 = $scope.addCommunityManagerdata.cm_education_3 + "," + $scope.addCommunityManagerdata.year3 + "," + $scope.addCommunityManagerdata.university3;
     $scope.password = $scope.addCommunityManagerdata.password;
     $scope.user_type = $scope.addCommunityManagerdata.user_type;
     
     addCommunityManagerService.addCommunityManager($scope.cm_name,$scope.cm_mob,$scope.cm_alt_mob_no, $scope.cm_email,$scope.cm_address,$scope.cm_dob,$scope.cm_gender,$scope.cm_language,$scope.cm_education_1,$scope.cm_education_2,$scope.cm_education_3,$scope.password,$scope.user_type).success(function (result) {
        
        if (result) {
       alert(result);
         
        }
       
      });

  }
    };

    addCommunityManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCommunityManagerController', addCommunityManagerController)
  })();