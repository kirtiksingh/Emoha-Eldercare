'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','editclusterManagerService'];
  var editclusterManagerController = function ($scope,$rootScope,$location,editclusterManagerService) {
    $scope.editclustormanager=function(){
      $scope.clustorId=$rootScope.clusterIdValue ;
      $scope.value1=$rootScope.clusterManagerDetails;
      angular.forEach($scope.value1, function (element) {
        $scope.clusterValue = element;
        if($scope.clustorId == $scope.clusterValue.clm_id){
          $scope.clustervalue2 = $scope.clusterValue;
          if($scope.clustervalue2 )
          {
            
            $scope.dob=$scope.clustervalue2.clm_dob.slice(0,10);
            $scope.lang=$scope.clustervalue2.clm_language;
            $scope.moNum=$scope.clustervalue2.clm_mob.slice(3,13);
            $scope.altNum=$scope.clustervalue2.clm_alt_mob_no.slice(3,13)
            
            $scope.adress1=$scope.clustervalue2.clm_address.split(',')[0];
            $scope.adress2=$scope.clustervalue2.clm_address.split(',')[1];
            
            $scope.education1degree=$scope.clustervalue2.clm_education_1.split(',')[0];
            $scope.education1year=$scope.clustervalue2.clm_education_1.split(',')[1];
            $scope.education1Uni=$scope.clustervalue2.clm_education_1.split(',')[2];
            $scope.education2degree=$scope.clustervalue2.clm_education_2.split(',')[0];
            $scope.education2year=$scope.clustervalue2.clm_education_2.split(',')[1];
            $scope.education2Uni=$scope.clustervalue2.clm_education_2.split(',')[2];
            $scope.education3degree=$scope.clustervalue2.clm_education_3.split(',')[0];
            $scope.education3year=$scope.clustervalue2.clm_education_3.split(',')[1];
            $scope.education3Uni=$scope.clustervalue2.clm_education_3.split(',')[2];



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
               if($scope.language1 == "English"){
                  $scope.preferedlang={Hindi:false,English:true}
                  if( $scope.language2=="Hindi"){
                    $scope.preferedlang={ Hindi:true,English:true}
                    
                    

                  }

               }
               if($scope.language1==""){
                $scope.preferedlang={Hindi:false,English:false}
                if($scope.language2==""){
                  $scope.preferedlang={Hindi:false,English:false}
                }

              }
            }


          }

        }
      });


    };
    $scope.updateClusterManager=function(clm_id){
      $scope.clm_name=$scope.clustervalue2.clm_name;
      $scope.clm_id=clm_id;
      
      $scope.clm_mob=$scope.moNum;
      $scope.clm_alt_mob_no=$scope.clustervalue2.clm_alt_mob_no;
      $scope.clm_email=$scope.clustervalue2.clm_email;
      $scope.clm_address=$scope.adress1 + "," + $scope.adress2;
      $scope.clm_dob=$filter('date')(new Date($scope.dob), "yyyy-MM-dd");
      $scope.clm_gender=$scope.clustervalue2.clm_gender;
      $scope.clm_education_1=$scope.education1degree +"," + $scope.education1year + "," + $scope.education1Uni;
      $scope.clm_education_2=$scope.education2degree + "," + $scope.education2year + "," + $scope.education2Uni;
      $scope.clm_education_3=$scope.education3degree + "," + $scope.education3year + "," + $scope.education3Uni;
        
      var langua =$scope.preferedlang;
      for( var i=0;i<4;i++){
           
       var id = [i];
       var key = Object.keys( langua )[id];
       var value = langua[key];
      /*  if(value == false){
        $scope.clm_language= "";
         if($scope.clm_language == ""){
           $scope.error = "Select Atleast one Language";
         }
       } */
       if(value == true)
       { 
         if(key=="Hindi"){
         $scope.language1=key;
         $scope.clLanguage=$scope.language1;
         $scope.clm_language=$scope.clLanguage;
         }
       
         if(key == "English"){
           $scope.language2=key;
           $scope.ClLanguage2 = $scope.language2;
           $scope.clm_language = $scope.ClLanguage2;

          
         }
         if($scope.ClLanguage2 && $scope.clLanguage ){
           $scope.bothlang=$scope.ClLanguage2 +","+ $scope.clLanguage;
           $scope.clm_language =$scope.bothlang;

         }

      }
     
      };

      editclusterManagerService.updateClusterManager($scope.clm_name,$scope.clm_id,$scope.clm_mob,$scope.clm_alt_mob_no,$scope.clm_email,$scope.clm_address,$scope.clm_dob, $scope.clm_gender,$scope.clm_education_1,$scope.clm_education_2,$scope.clm_education_3,$scope.clm_language).success(function (result){
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

    editclusterManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('editclusterManagerController',editclusterManagerController)
  })();