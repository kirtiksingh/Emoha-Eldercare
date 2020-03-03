'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var summaryAddResponderController = function ($scope,$rootScope,$location) {


    $scope.clickeddata = function(){
      alert("New Responder Added");
  }
    };

    summaryAddResponderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('summaryAddResponderController', summaryAddResponderController)
  })();