'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','editRegionManagerService'];
  var editRegionManagerController = function ($scope,$rootScope,$location,$filter,editRegionManagerService) {

    $scope.regionIdData = function(){
      $scope.regionId = $rootScope.regionIdValue ;
      $scope.value1 =   $rootScope.regionManagerDetails ;
  
      angular.forEach($scope.value1, function (element) {
        $scope.regionValue1 = element;
          if( $scope.regionId == $scope.regionValue1.rm_id){
            $scope.regionvalue1 = $scope.regionValue1;
            if( $scope.regionvalue1){
              $scope.dob=$scope.regionvalue1.rm_dob.slice(0,10);
              $scope.moNumber=$scope.regionvalue1.rm_mob.slice(3,13);
              $scope.altNum=$scope.regionvalue1.rm_alt_mob_no.slice(3,13);
              $scope.lang=$scope.regionvalue1.rm_language;
              $scope.adress1=$scope.regionvalue1.rm_address.split(',')[0];
              $scope.adress2=$scope.regionvalue1.rm_address.split(',')[1];
              $scope.rm_id=$scope.regionvalue1.rm_id;
              $scope.education1degree=$scope.regionvalue1.rm_education_1.split(',')[0];
              $scope.education1year=$scope.regionvalue1.rm_education_1.split(',')[1];
              $scope.education1Uni=$scope.regionvalue1.rm_education_1.split(',')[2];
              $scope.education2degree=$scope.regionvalue1.rm_education_2.split(',')[0];
              $scope.education2year=$scope.regionvalue1.rm_education_2.split(',')[1];
              $scope.education2Uni=$scope.regionvalue1.rm_education_2.split(',')[1];
              $scope.education3degree=$scope.regionvalue1.rm_education_3.split(',')[0];
              $scope.education3year=$scope.regionvalue1.rm_education_3.split(',')[1];
              $scope.education3Uni=$scope.regionvalue1.rm_education_3.split(',')[2];

            /*   $scope.preferedlangother=$scope.regionvalue1.rm_language;
              if($scope.preferedlangother){
                $scope.preferedlang={Hindi:false,English:false}
              } */

              if($scope.lang == null){
                $scope.preferedlang={Hindi:false,English:false}
              }
              
              
              else{
                $scope.language1=$scope.lang.split(',')[0];
                $scope.language2=$scope.lang.split(',')[1];

                if($scope.language1=="Hindi"){
                  $scope.preferedlang={Hindi:true,English:false}
                  if( $scope.language2=="English"){
                    $scope.preferedlang={ Hindi:true,English:true}
                    

                  }

                }
                if($scope.language1=="English"){
                  $scope.preferedlang={Hindi:false,English:true}
                  if( $scope.language2=="Hindi"){
                    $scope.preferedlang={ Hindi:true,English:true}
                   
                  }

                }
                if($scope.language1==""){
                  $scope.preferedlang={Hindi:false,English:false}
                  if( $scope.language2==""){
                    $scope.preferedlang={ Hindi:false,English:false}
                    
                    

                  }

                }
               
               
                

              }
             


            }

            
          }
          
         
        });
      
  
    };
    $scope.updateRegionManager=function(rm_id){
      $scope.rm_name= $scope.regionvalue1.rm_name;
      $scope.rm_id=rm_id;
      $scope.rm_mob=$scope.moNumber;
      $scope.rm_alt_mob_no=$scope.altNum;
      $scope.rm_email=$scope.regionvalue1.rm_email;
      $scope.rm_address=$scope.adress2 + "," + $scope.adress1;
      $scope.rm_dob=$filter('date')(new Date($scope.dob), "yyyy-MM-dd");
      
      $scope.rm_education_1=$scope.education1degree + "," +  $scope.education1year + "," + $scope.education1Uni ;
      $scope.rm_education_2=$scope.education2degree + "," + $scope.education2year + "," + $scope.education2Uni ;
      $scope.rm_education_3=$scope.education3degree + "," + $scope.education3year + "," + $scope.education3Uni;

      $scope.gender=$scope.regionvalue1.rm_gender;
      if($scope.gender){
        $scope.rm_gender=$scope.gender;

      }

      var langua =$scope.preferedlang;
      for( var i=0;i<4;i++){
           
       var id = [i];
       var key = Object.keys( langua )[id];
       var value = langua[key];
     /*   if(value == false){
        $scope.rm_language = "";
         
     } */
       if(value == true)
       { 
        if(key == "Hindi"){
          $scope.language1 = key;
          $scope.cust_language1 = $scope.language1;
          $scope.rm_language = $scope.cust_language1;
        }
        if(key == "English"){
          $scope.language2 = key;  
          $scope.cust_language2 = $scope.language2; 
          $scope.rm_language = $scope.cust_language2;  
        }
        if( $scope.cust_language1 &&  $scope.cust_language2){
          $scope.language3 = $scope.cust_language1  + "," + $scope.cust_language2;  
          $scope.cust_language3 = $scope.language3 ; 
          $scope.rm_language = $scope.cust_language3;  
        }

      };
    

      
      
        


       };
       editRegionManagerService.updateRegionManager($scope.rm_name,$scope.rm_id,$scope.rm_mob,$scope.rm_alt_mob_no,$scope.rm_email,$scope.rm_address,$scope.rm_dob,$scope.rm_education_1,$scope.rm_education_2,$scope.rm_education_3,$scope.rm_gender, $scope.rm_language).success(function (result) {
        
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
  editRegionManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('editRegionManagerController', editRegionManagerController)
  })();