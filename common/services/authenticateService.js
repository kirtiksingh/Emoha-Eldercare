/**
 * Created by root on 27/4/16.
 */
(function () {
  var injectParams = ['LocalStorageService'];
  var AuthenticateFactory = function (LocalStorageService) {
    var factory = {};
    /**
     *
     * @returns {*}
     */
    factory.isAuthenticated = function(){
        return LocalStorageService.get('authToken');
    };
    return factory;
  };
  AuthenticateFactory.$inject  = injectParams;
  angular.module('seniorApp')
    .factory('authenticateService',AuthenticateFactory)

})();
