'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var summaryAddAttendentController = function ($scope,$rootScope,$location) {


    $scope.clickeddata = function(){
      alert("New Attendent Added");
  }
    };

    summaryAddAttendentController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('summaryAddAttendentController', summaryAddAttendentController)
  })();