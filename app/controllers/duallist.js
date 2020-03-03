'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var duallistController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    duallistController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('duallistController', duallistController)
  })();