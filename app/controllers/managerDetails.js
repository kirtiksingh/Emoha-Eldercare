'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var managerDetailsController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    managerDetailsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('managerDetailsController', managerDetailsController)
  })();