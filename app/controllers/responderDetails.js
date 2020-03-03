'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter'];
  var responderDetailsController = function ($scope,$rootScope,$location,$filter) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    $scope.reponderId=function(){
      $scope.responderId=$rootScope.respId;
      $scope.value1=$rootScope.responderDetails;

        angular.forEach($scope.value1, function (element){
            $scope.responderValue = element;
           if($scope.responderId == $scope.responderValue.rsp_id){
              $scope.respondData = $scope.responderValue;

          }
        })
    };
       
    };

    responderDetailsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('responderDetailsController', responderDetailsController)
  })();