'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var customerRecordController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("Clicked");
  }
    };

    customerRecordController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('customerRecordController', customerRecordController)
  })();