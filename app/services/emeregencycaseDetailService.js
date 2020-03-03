/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var emergencycaseDetailService = function ($http,$rootScope) {
    
      return factory;
    };
    emergencycaseDetailService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('emergencycaseDetailService',emergencycaseDetailService);
  })();