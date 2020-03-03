'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addClusterManagerService'];
  var addClusterManagerController = function ($scope,$rootScope,$location,$filter,addClusterManagerService) {


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

 

    $scope.clicked = function(){
      alert("Manager Added Successfully");
  }

  $scope.addClusterManagerdata ={
    clm_name:"",
    clm_mob:"",
    // cluster_id: "",
     clm_alt_mob_no:"",
     clm_email:"",
     clm_address:"",
     clm_dob:"",
     clm_gender:"",
     clm_language:"",
     clm_education_1:"",
     clm_education_2:"",
     clm_education_3:"",
     password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
     user_type:"Clustermanager",
     year1 :  "",
     year2 :  "" ,
     year3 :  "" , 
    university1: "", 
    university2: "", 
    university3: "",    
    
  }

  $scope.addClusterManager = function(){
     $scope.clm_name = $scope.addClusterManagerdata.clm_name;
     $scope.clm_mob = "91" + $scope.addClusterManagerdata.clm_mob;
    //  $scope.cluster_id = $scope.addClusterManagerdata.cluster_id;
     $scope.clm_alt_mob_no = "91" + $scope.addClusterManagerdata.clm_alt_mob_no;
     $scope.clm_email = $scope.addClusterManagerdata.clm_email;
     $scope.clm_address = $scope.addClusterManagerdata.clm_address + "," + $scope.addClusterManagerdata.clm_address1;
    //  $scope.clm_dob = new Date($scope.addClusterManagerdata.clm_dob); 
     $scope.clm_dob =$filter('date')(new Date($scope.addClusterManagerdata.clm_dob), "yyyy-MM-dd"); 
     $scope.addClusterManagerdata.clm_gender = $scope.selectedgender.name; 
     $scope.clm_gender = $scope.addClusterManagerdata.clm_gender;
  
    //  $scope.albumNameArray = [];
     
    //  angular.forEach($scope.albums, function(album){
    //    if (album.selected ==true) {
    //      $scope.albumNameArray.push(album.name);;
    //      $rootScope.language1 = $scope.albumNameArray[0] ;
    //      $rootScope.language2 = $scope.albumNameArray[1] ;
    //      $rootScope.clm_language = $rootScope.language1 + "," + $rootScope.language2 ;
    //    }
    //    else if(album.selected ==false){
    //     $rootScope.language1 = $scope.language ;
    //       $rootScope.clm_language = $scope.language1 ;
    //    }
    //  });
    
    $scope.albumNameArray = [];
     
    angular.forEach($scope.albums, function(album){
    
      if (album.selected ==true) {   
       $scope.language1 = "";
       $scope.language2 = "";  
        $scope.albumNameArray.push(album.name);
        if($scope.albumNameArray[0]){
         $scope.language1 = $scope.albumNameArray[0] ; 
         $scope.clm_language = $scope.language1;
           if($scope.albumNameArray[1]){
             $scope.language2 = $scope.albumNameArray[1] ; 
         $scope.clm_language = $scope.language1 + "," + $scope.language2;
         
           }
           
        }
        
      }
    });
   $scope.language = $scope.languageOther;
   if($scope.language){
     $scope.clm_language = $scope.language;
   }
   
     $scope.clm_education_1 = $scope.addClusterManagerdata.clm_education_1 + "," + $scope.addClusterManagerdata.year1 +"," + $scope.addClusterManagerdata.university1 ;
     $scope.clm_education_2 = $scope.addClusterManagerdata.clm_education_2 + "," + $scope.addClusterManagerdata.year2 + "," + $scope.addClusterManagerdata.university2;
     $scope.clm_education_3 = $scope.addClusterManagerdata.clm_education_3 + "," + $scope.addClusterManagerdata.year3 + "," + $scope.addClusterManagerdata.university3;
     $scope.password = $scope.addClusterManagerdata.password;
     $scope.user_type = $scope.addClusterManagerdata.user_type;
     
     addClusterManagerService.addClusterManager($scope.clm_name,$scope.clm_mob,$scope.clm_alt_mob_no, $scope.clm_email,$scope.clm_address,$scope.clm_dob,$scope.clm_gender,$scope.clm_language,$scope.clm_education_1,$scope.clm_education_2,$scope.clm_education_3,$scope.password,$scope.user_type).success(function (result) {
        
        if (result) {
       alert(result);
         
        }
       
      });

  }
    };

    addClusterManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addClusterManagerController', addClusterManagerController)
  })();