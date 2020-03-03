'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var dataAdminSettingsController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("Your Password Change Successfully");
  }
    };

    dataAdminSettingsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('dataAdminSettingsController', dataAdminSettingsController)
  })();