'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','emergencyCasesService'];
  var emergencycaseDetailController = function ($scope,$rootScope,$location,$filter,emergencyCasesService) {

    $scope.emergencyIdData = function(){
      $scope.emergencyId = $rootScope.emergencyIdValue ;
      // $scope.emeregencydata =   $rootScope.emergencyDetails ;
      emergencyCasesService.emergencyIdData($scope.emergencyId).success(function (result) {
        if (result) {
          $rootScope.emergencyDetailsId = result;
          // $rootScope.total = $rootScope.emergencyDetails.length;
          // angular.forEach($rootScope.emergencyDetails, function (element) {
          //  $scope.emergencyDetailsvalue = element.emg_date_time;
          
          // });
          
        }
      });
    };
   
    
   
  };
  emergencycaseDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('emergencycaseDetailController', emergencycaseDetailController)
  })();