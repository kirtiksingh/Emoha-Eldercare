'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var nurseDetailsController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    nurseDetailsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('nurseDetailsController', nurseDetailsController)
  })();