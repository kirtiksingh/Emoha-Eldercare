'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var summaryAddCareManagerController = function ($scope,$rootScope,$location) {


    $scope.clickeddata = function(){
      alert("New CareManager Added");
  }
    };

    summaryAddCareManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('summaryAddCareManagerController', summaryAddCareManagerController)
  })();