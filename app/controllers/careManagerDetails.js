'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$filter','$location'];
  var careManagerDetailController = function ($scope,$rootScope,$filter,$location) {


    $scope.careManagerIdData = function(){
      $scope.careManagerId = $rootScope.CareId ;
      $scope.carevalue = $rootScope.careManagerDetails;
  
      angular.forEach($scope.carevalue, function (element) {
        $scope.careManagerValue = element;
          if( $scope.careManagerId == $scope.careManagerValue.crm_id){
            $scope.careManagerIdValue = $scope.careManagerValue;
          }
         
        })
  
    };
    };

    careManagerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careManagerDetailController', careManagerDetailController)
  })();