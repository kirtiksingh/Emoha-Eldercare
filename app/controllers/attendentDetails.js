'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var attendentDetailsController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    attendentDetailsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('attendentDetailsController', attendentDetailsController)
  })();