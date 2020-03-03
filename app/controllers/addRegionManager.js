'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addRegionManagerService'];
  var addRegionManagerController = function ($scope,$rootScope,$location,$filter,addRegionManagerService) {


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

 

  $scope.addRegionManagerdata ={
    rm_name:"",
    rm_mob:"",
    // region_id:"",
    rm_alt_mob_no:"",
    rm_email:"",
    rm_address:"",
    rm_dob:"",
    rm_gender:"",
    rm_language:"",
    rm_education_1:"",
    rm_education_2:"",
    rm_education_3:"",
    password:"$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a",
    user_type:"Regionmanager",
     year1 :  "",
     year2 :  "" ,
     year3 :  "" , 
    university1: "", 
    university2: "", 
    university3: "",    
    
  }

  $scope.addRegionManager = function(){
     $scope.rm_name = $scope.addRegionManagerdata.rm_name;
     $scope.rm_mob = "91" + $scope.addRegionManagerdata.rm_mob;
    //  $scope.region_id = $scope.addRegionManagerdata.region_id;
     $scope.rm_alt_mob_no = "91" + $scope.addRegionManagerdata.rm_alt_mob_no;
     $scope.rm_email = $scope.addRegionManagerdata.rm_email;
     $scope.rm_address = $scope.addRegionManagerdata.rm_address + "," + $scope.addRegionManagerdata.rm_address1;
    //  $scope.clm_dob = new Date($scope.addClusterManagerdata.clm_dob); 
     $scope.rm_dob =$filter('date')(new Date($scope.addRegionManagerdata.rm_dob), "yyyy-MM-dd"); 
     $scope.addRegionManagerdata.rm_gender = $scope.selectedgender.name; 
     $scope.rm_gender = $scope.addRegionManagerdata.rm_gender;
  
     $scope.albumNameArray = [];
     
     angular.forEach($scope.albums, function(album){
     
       if (album.selected ==true) {   
        $scope.language1 = "";
        $scope.language2 = "";  
         $scope.albumNameArray.push(album.name);
         if($scope.albumNameArray[0]){
          $scope.language1 = $scope.albumNameArray[0] ; 
          $scope.rm_language = $scope.language1;
            if($scope.albumNameArray[1]){
              $scope.language2 = $scope.albumNameArray[1] ; 
          $scope.rm_language = $scope.language1 + "," + $scope.language2;
          
            }
            
         }
         
       }
     });
    $scope.language = $scope.languageOther;
    if($scope.language){
      $scope.rm_language = $scope.language;
    }
    
     
    //  $rootScope.clm_language=  $rootScope.clm_language;
     $scope.rm_education_1 = $scope.addRegionManagerdata.rm_education_1 + "," + $scope.addRegionManagerdata.year1 +"," + $scope.addRegionManagerdata.university1 ;
     $scope.rm_education_2 = $scope.addRegionManagerdata.rm_education_2 + "," + $scope.addRegionManagerdata.year2 + "," + $scope.addRegionManagerdata.university2;
     $scope.rm_education_3 = $scope.addRegionManagerdata.rm_education_3 + "," + $scope.addRegionManagerdata.year3 + "," + $scope.addRegionManagerdata.university3;
     $scope.password = $scope.addRegionManagerdata.password;
     $scope.user_type = $scope.addRegionManagerdata.user_type;
     
     addRegionManagerService.addRegionManager($scope.rm_name,$scope.rm_mob,$scope.rm_alt_mob_no, $scope.rm_email,$scope.rm_address,$scope.rm_dob,$scope.rm_gender,$scope.rm_language,$scope.rm_education_1,$scope.rm_education_2,$scope.rm_education_3,$scope.password,$scope.user_type).success(function (result) {
        
        if (result == "your data is saved") {
            alert(result);
         
        }
        else 
        {
          alert("error");
        }
       
      });

  }
    };

    addRegionManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addRegionManagerController', addRegionManagerController)
  })();