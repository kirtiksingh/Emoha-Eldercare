'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var dataAdminDetailsController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    dataAdminDetailsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('dataAdminDetailsController', dataAdminDetailsController)
  })();