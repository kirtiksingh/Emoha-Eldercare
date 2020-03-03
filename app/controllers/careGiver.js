'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','customerService'];
  var careGiverController = function ($scope,$rootScope,$location,customerService) {


    };

    careGiverController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careGiverController', careGiverController)
  })();