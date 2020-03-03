/**
 * Created by root on 22/4/19.
 */
(function () {
  var injectParams = ['$http','$rootScope'];
  var loginService = function ($http,$rootScope) {
    // var serviceBase = "http://localhost:3000";
    var factory = {};
    
  /***************** *************************************
   functionName:testing
   inputJSON:
   outputJSON:
   Description:
   UseIn:mainController
   OwnerName:Sushma
   Date:

   *******************************************************/
 
  factory.login = function (email, password) {
    var serviceInput = {};
    serviceInput.email = email;
    serviceInput.password = password;
  
    return $http.post("http://13.233.7.113:5000/api/login", serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('email incorrect');
      });
  };

    return factory;
  };
  loginService.$inject = injectParams;
  angular.module('seniorApp')
    .factory('loginService', loginService);
})();

