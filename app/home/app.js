'use strict';


var app = angular.module('seniorApp', ['ngRoute','ngSanitize','angular-md5','angularUtils.directives.dirPagination']);
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    
    var viewBase = '../../templates/home/';

    
    $routeProvider
      .when("/", {
        controller: 'loginController',
        templateUrl:  viewBase + 'login.html'  
      })
      .when("/dataAdmin/", {
        controller: 'mainController',
        templateUrl: viewBase + 'index.html'
      })
      .otherwise('/', {
        redirectTo: '/'
    });
      
    }])
    .run(["$rootScope","$window", '$location', 'md5','LocalStorageService', function ($rootScope, $window, $location,md5,LocalStorageService) {
    
}]);

   