'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','editCareManagerService','addResponderService'];
  var editCareManagerController = function ($scope,$rootScope,$location,$filter,editCareManagerService,addResponderService) {

   
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



    $scope.careManagerIdData = function(){
        $scope.careManagerId = $rootScope.CareId ;
        $scope.carevalue = $rootScope.careManagerDetails;
    
        angular.forEach($scope.carevalue, function (element) {
          $scope.careManagerValue = element;
            if( $scope.careManagerId == $scope.careManagerValue.crm_id){
              $scope.careManagerIdValue = $scope.careManagerValue;

              $scope.moNumber=$scope.careManagerIdValue.crm_mob.slice(2,12);
               $scope.altNum=$scope.careManagerIdValue.crm_alt_mob_no.slice(2,12);
               $scope.dob = $scope.careManagerIdValue.crm_dob.slice(0,10);
              $scope.address1 = $scope.careManagerIdValue.crm_address.split(',')[0];
              $scope.address2 = $scope.careManagerIdValue.crm_address.split(',')[1];
              $scope.degree1 = $scope.careManagerIdValue.crm_education_1.split(',')[0];
              $scope.degree2 = $scope.careManagerIdValue.crm_education_2.split(',')[0];
              $scope.degree3 = $scope.careManagerIdValue.crm_education_3.split(',')[0];
              $scope.year1 = $scope.careManagerIdValue.crm_education_1.split(',')[1];
              $scope.year2 = $scope.careManagerIdValue.crm_education_2.split(',')[1];
              $scope.year3 = $scope.careManagerIdValue.crm_education_3.split(',')[1];
              $scope.university1 = $scope.careManagerIdValue.crm_education_1.split(',')[2];
              $scope.university2 = $scope.careManagerIdValue.crm_education_2.split(',')[2];
              $scope.university3 = $scope.careManagerIdValue.crm_education_3.split(',')[2];
             
             
              $scope.lan = $scope.careManagerIdValue.crm_language;
              if($scope.lan ==null){
                $scope.preferredlanguage = { Hindi : false , English:false}; 
              }
              else{
                $scope.languagevalue1 = $scope.lan.split(',')[0];
                $scope.languagevalue2 = $scope.lan.split(',')[1];
                if($scope.languagevalue1 == "Hindi"){
                    $scope.preferredlanguage = { Hindi : true , English:false}; 
                    if($scope.languagevalue2== "English"){
                        $scope.preferredlanguage = { Hindi : true , English:true}; 
                    }
                }
                if($scope.languagevalue1 == "English"){
                    $scope.preferredlanguage = { Hindi : false , English:true}; 
                    if($scope.languagevalue2 == "Hindi"){
                        $scope.preferredlanguage = { Hindi : true, English:true}; 
                    }
                }
                if($scope.languagevalue1=""){
                  $scope.preferredlanguage = { Hindi : false , English:false}; 
                  if($scope.languagevalue2 == ""){
                    $scope.preferredlanguage = { Hindi : false , English:false}; 
                  }
                }
                
              }
              
            }
           
          })
    
      };

      $scope.updateCare=function(crm_id){
        $scope.crm_name=$scope.careManagerIdValue.crm_name;
        $scope.crm_id=crm_id;
        $scope.crm_mob=$scope.moNumber;
        $scope.crm_alt_mob_no=$scope.altNum;
        $scope.crm_email=$scope.careManagerIdValue.crm_email;
        $scope.crm_address=$scope.address1 + "," + $scope.address2;
        $scope.crm_dob=$filter('date')(new Date($scope.dob), "yyyy-MM-dd");
        $scope.crm_education_1=$scope.degree1+ "," +$scope.year1 +","+$scope.university1;
        $scope.crm_education_2=$scope.degree2+ "," +$scope.year2 +","+$scope.university2;
        $scope.crm_education_3=$scope.degree3+ "," +$scope.year3 +","+$scope.university3;
        $scope.selectgender=$scope.careManagerIdValue.crm_gender;
        if($scope.selectgender){
          $scope.crm_gender=$scope.selectgender;
        }
       $scope.comm_id=$scope.editResponderdata.comm_id;

        var lang =$scope.preferredlanguage;
        for(var i=0;i<4;i++){
          var id=[i];
          var key= Object.keys( lang )[id];
          var value=lang[key];

          if(value == true){
            if(key == "Hindi"){
              $scope.language1=key;
              $scope.carelang=$scope.language1;
              $scope.crm_language=$scope.carelang;
            }
            if(key=="English"){
              $scope.language2=key;
              $scope.carelang2=$scope.language2;
              $scope.crm_language=$scope.carelang2;
            }
            if($scope.carelang && $scope.carelang2 ){
              $scope.bothlang=$scope.carelang + ","+ $scope.carelang2;
              $scope.crm_language=$scope.bothlang;

            }
          }
        };
        editCareManagerService.updateCareManager($scope.crm_name,$scope.crm_id,$scope.crm_mob, $scope.crm_alt_mob_no,$scope.crm_email,$scope.crm_address,$scope.crm_dob,$scope.crm_education_1,$scope.crm_education_2,$scope.crm_education_3,$scope.crm_gender, $scope.comm_id,$scope.crm_language).success(function(results){
          
          if (results) {
            alert(results);
         
        }
        else 
        {
          alert("error");
        }
        });

      };
  };
  editCareManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('editCareManagerController',editCareManagerController)
  })();