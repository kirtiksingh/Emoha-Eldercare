'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addResponderService','editResponderService'];
  var reController = function ($scope,$rootScope,$location,$filter,addResponderService,editResponderService) {

    
    $scope.getCommunityData = function () {
   
        $rootScope.getCommunityManagerdata = {};
        addResponderService.getCommunityData().success(function (result) {
         
          if (result) {
          
            $rootScope.getCommunityManagerdata = result;
           
            angular.forEach($scope.getCommunityManagerdata, function (data) {
           
             $scope.getCommunityManagerdatavalue = data;
           
            })
           
          }
         
        });
      };
          $scope.responderId=function(){
              $scope.responderId=$rootScope.respId;
              $scope.value1=$rootScope.responderDetails;
              angular.forEach($scope.value1,function(element){
                  $scope.reponderValue=element
                  if($scope.responderId == $scope.reponderValue.rsp_id){
                      $scope.respVal=$scope.reponderValue;
                      if($scope.respVal){
                          
                          
                          $scope.moNumber=$scope.respVal.res_mob.slice(3,13);
                          $scope.altNum=$scope.respVal.rsp_alt_mob_no.slice(3,13);
                          
                          $scope.lang=$scope.respVal.rsp_language;
                          $scope.adress1=$scope.respVal.rsp_address.split(',')[0];
                          $scope.adress2=$scope.respVal.rsp_address.split(',')[1];
                          // $scope.dob=$scope.respVal.rsp_dob.slice(0,10);
                          
                          $scope.education1degree=$scope.respVal.rsp_education_1.split(',')[0];
                          $scope.education1year=$scope.respVal.rsp_education_1.split(',')[1];
                          $scope.education1Uni=$scope.respVal.rsp_education_1.split(',')[2];
                          $scope.education2degree=$scope.respVal.rsp_education_2.split(',')[0];
                          $scope.education2year=$scope.respVal.rsp_education_2.split(',')[1];
                          $scope.education2Uni=$scope.respVal.rsp_education_2.split(',')[2];
                          $scope.education3degree=$scope.respVal.rsp_education_3.split(',')[0];
                          $scope.education3year=$scope.respVal.rsp_education_3.split(',')[1];
                          $scope.education3Uni=$scope.respVal.rsp_education_3.split(',')[2];
                          $scope.dateofBirth =$scope.respVal.rsp_dob;
                          if($scope.dateofBirth==null){
                            $scope.dob="";
                          }
                          else{
                            $scope.dob=$scope.dateofBirth.slice(0,10);
                          }
      
                          if($scope.lang == null){
                              $scope.preferdlang={Hindi:false,English:false}
                            }
                          else{
                              $scope.language1=$scope.lang.split(',')[0];
                              $scope.language2=$scope.lang.split(',')[1];
      
                              if($scope.language1=="Hindi"){
                                  $scope.preferdlang = {Hindi:true,English:false}
                                  if($scope.language1=="English"){
                                      $scope.preferdlang= {Hindi:true,English:true}
                                  }
                              }
                              if($scope.language1=="English"){
                                  $scope.preferdlang= {Hindi:false,English:true}
                                  if($scope.language2=="Hindi"){
                                      $scope.preferdlang= {Hindi:true,Engilsh:true}
                                  }
                              }
                              if($scope.language1==""){
                                  $scope.preferdlang = {Hindi:false,English:false}
                                  if($scope.language2 ==""){
                                      $scope.preferdlang= {Hindi:false,Engilsh:false}
                                  }
                              }
      
                          }
                          
            
                      }
      
                  }
      
              })
          };
          $scope.updateResponder=function(rsp_id){
         $scope.rsp_id=rsp_id
         $scope.rsp_name=$scope.respVal.rsp_name;
         $scope.res_mob= "91" + $scope.moNumber;
        $scope.rsp_alt_mob_no=$scope.altNum;
        $scope.rsp_email=$scope.respVal.rsp_email;
        $scope.rsp_address=$scope.adress1 + "," + $scope.adress2;
        $scope.rsp_dob=$filter('date')(new Date($scope.dob), "yyyy-MM-dd"); 
        
        
        $scope.rsp_education_1=$scope.education1degree + "," + $scope.education1year + "," + $scope.education1Uni;
        $scope.rsp_education_2=$scope.education2degree + "," + $scope.education2Uni + "," + $scope.education2Uni;
        $scope.rsp_education_3=$scope.education3degree + "," + $scope.education3year + "," + $scope.education3Uni;
       
        $scope.comm_id=$scope.editResponderdata.comm_id;
        $scope.genderSelect=$scope.respVal.rsp_gender;
         if($scope.genderSelect){
          $scope.rsp_gender=$scope.genderSelect;
      
         }
          
         var langua = $scope.preferdlang;
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
             $scope.rsp_language = $scope.cust_language1;
           }
           if(key == "English"){
             $scope.language2 = key;  
             $scope.cust_language2 = $scope.language2; 
             $scope.rsp_language = $scope.cust_language2;  
           }
           if( $scope.cust_language1 &&  $scope.cust_language2){
             $scope.language3 = $scope.cust_language1  + "," + $scope.cust_language2;  
             $scope.cust_language3 = $scope.language3 ; 
             $scope.rsp_language = $scope.cust_language3;  
           }
          }
          
          
      
         };
         editResponderService.updateResponder($scope.rsp_name,$scope.rsp_id,$scope.res_mob,$scope.rsp_alt_mob_no,$scope.rsp_email,$scope.rsp_address,$scope.rsp_dob,$scope.rsp_education_1,$scope.rsp_education_2,$scope.rsp_education_3,$scope.comm_id, $scope.rsp_gender,$scope.rsp_language).success(function (result) {
              
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

    reController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('reController', reController)
  })();