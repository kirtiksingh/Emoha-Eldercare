/**
 * Created by root on 18/4/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location','$http','loginService','LocalStorageService'];
  var loginController = function ($scope, $rootScope, $window, $location, $http,loginService,LocalStorageService) {
    
 $scope.loginModel = {
      email: "",
      password: ""
    };
    $scope.login = function () {
      
    //  $scope.email = $scope.loginModel.email;
    //  $scope.password = $scope.loginModel.password;
      loginService.login($scope.loginModel.email,$scope.loginModel.password).success(function (result) {
        //DebugService.logData(result);
        // $scope.loading = false;
        if (result.message == "You are login") {
        $scope.message = result.message;
        LocalStorageService.set('emailMobile', $scope.loginModel.email);
        LocalStorageService.set('password', $scope.loginModel.password);
        // console.log(LocalStorageService.get('emailMobile'));
              window.location = '../../dataAdmin/'
            
           
          // LocalStorageService.set('userData', JSON.stringify(result.data));
        }
        else{
          alert("Wrong Emaild and Password");
        }
       
      });
    };    
  };
  loginController.$inject = injectParams;
  angular.module('seniorApp').controller('loginController', loginController);
}());
