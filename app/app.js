'use strict';


var app = angular.module('seniorApp', ['ngRoute','ngSanitize','angular-md5','angularUtils.directives.dirPagination','checklist-model', 'ui.calendar', 'ui.bootstrap','ui.select']);
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    
    var viewBase = '../templates/';
   
    
    $routeProvider
    .when("/", {
      controller: 'loginCtrl',
      templateUrl:  viewBase + 'login.html'  
    })
    .when('/logout', {
      resolve: {
        deadResolve: function($window) {
          sessionStorage.removeItem('emailMobile');
          sessionStorage.removeItem('password');
          $window.location = "../";
        }
      }
    })
      .when("/dataAdmin/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'mainController',
        templateUrl:  viewBase + 'basetpl.html'  
      })
      .when("/homeCareRegistration/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'homeCareRegistrationController',
        templateUrl: viewBase + 'homeCareRegistration.html'
      })
      .when("/comprehensivePackageRegistration/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'comprehensivePackageRegistrationController',
        templateUrl: viewBase + 'comprehensivePackageRegistration.html'
      })
      .when("/customer/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'customerController',
        templateUrl: viewBase + 'customer.html'
      })
      .when("/history/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'monitoringController',
        templateUrl: viewBase + 'monitoring.html'
      })
      .when("/manager/regionManagerDetail/editRegionManager", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'editRegionManagerController',
        templateUrl: viewBase + 'editRegionManager.html'
      })
      .when("/manager/communityManagerDetail/editCommunityManager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'editCommunityManagerController',
        templateUrl: viewBase + 'editCommunityManager.html'
      })
      .when("/manager/clusterManagerDetail/editclusterManager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'editclusterManagerController',
        templateUrl: viewBase + 'editclusterManager.html'
      })
      .when("/manager/clusterManagerDetail/:clm_id", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'clusterManagerDetailController',
        templateUrl: viewBase + 'clusterManagerDetail.html'
      })
      .when("/manager/regionManagerDetail/:rm_id", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'regionManagerDetailController',
        templateUrl: viewBase + 'regionManagerDetail.html'
      })
      .when("/manager/communityManagerDetail/:cm_id", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'communityManagerDetailController',
        templateUrl: viewBase + 'communityManagerDetail.html'
      })
      .when("/customer/customerDetail/:cust_id", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'customerDetailController',
        templateUrl: viewBase + 'customerDetail.html'
      })
      .when("/customer/customerdetails/editCustomerDetails", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'editCustomerDetailsController',
        templateUrl: viewBase + 'editCustomerdetails.html'
      })
      .when("/customer/customerRecord/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'customerRecordController',
        templateUrl: viewBase + 'customerRecord.html'
      })
      .when("/careManager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'careManagerController',
        templateUrl: viewBase + 'careManager.html'
      })
      .when("/customer/addCustomer", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addCustomerController',
        templateUrl: viewBase + 'addCustomer.html'
      })
      
      .when("/careManager/careManagerDetail/editcareManagerDetail/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'editCareManagerController',
        templateUrl: viewBase + 'editCareManagerDetail.html'
      })
      .when("/careManager/careManagerDetail/:crm_id", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'careManagerDetailController',
        templateUrl: viewBase + 'careManagerDetails.html'
      })
      .when("/tracking/tracking_detail/:emg_case_no", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'emergencycaseDetailController',
        templateUrl: viewBase + 'emergencycaseDetail.html'
      })
      // .when("/careManager/careManagerSetting/", {
      //   controller: 'careManagerSettingController',
      //   templateUrl: viewBase + 'careManagerSettings.html'
      // })
      .when("/careManager/addCareManager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addCareManagerController',
        templateUrl: viewBase + 'addCareManager.html'
      })
      .when("/careManager/addCareManager/summaryAddCareManager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'summaryAddCareManagerController',
        templateUrl: viewBase + 'summaryAddCareManager.html'
      })
      .when("/responder/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'responderController',
        templateUrl: viewBase + 'responder.html'
      })
      .when("/responder/responderDetail/:rsp_id", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              $window.location = "../";
            }
          },
        },
        controller: 'responderDetailsController',
        templateUrl: viewBase + 'responderDetail.html'
      })
      .when("/responder/editresponder/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              $window.location = "../";
            }
          },
        },
        controller: 'reController',
        templateUrl: viewBase + 're.html'
      })
   
     
      .when("/responder/addResponder/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addResponderController',
        templateUrl: viewBase + 'addResponder.html'
      })
   
      .when("/responder/addResponder/summaryAddResponder/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'summaryAddResponderController',
        templateUrl: viewBase + 'summaryAddResponder.html'
      })
      .when("/nurse/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'nurseController',
        templateUrl: viewBase + 'nurse.html'
      })
      .when("/nurse/nurseDetails/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'nurseDetailsController',
        templateUrl: viewBase + 'nurseDetails.html'
      })
      .when("/nurse/addNurse/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addNurseController',
        templateUrl: viewBase + 'addNurse.html'
      })
      .when("/nurse/addNurse/summaryAddNurse/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'summaryAddNurseController',
        templateUrl: viewBase + 'summaryAddNurse.html'
      })
      .when("/attendent/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'attendentController',
        templateUrl: viewBase + 'attendent.html'
      })
      .when("/attendent/attendentDetails/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'attendentDetailsController',
        templateUrl: viewBase + 'attendentDetails.html'
      })
      .when("/attendent/addAttendent/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addAttendentController',
        templateUrl: viewBase + 'addAttendent.html'
      })
      .when("/attendent/addAttendent/summaryAddAttendent/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'summaryAddAttendentController',
        templateUrl: viewBase + 'summaryAddAttendent.html'
      })

      .when("/duallist/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'duallistController',
        templateUrl: viewBase + 'duallist.html'
      })
      
      .when("/sensorConfig/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'sensorConfigController',
        templateUrl: viewBase + 'sensorConfig.html'
      })
      .when("/tracking/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'emergencyCasesController',
        templateUrl: viewBase + 'emergencyCases.html'
      })
      .when("/assignDuty/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'assignDutyController',
        templateUrl: viewBase + 'assignDuty.html'
      })
      .when("/careGiver/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'careGiverController',
        templateUrl: viewBase + 'careGiver.html'
      })
      .when("/data_admin/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'dataAdminController',
        templateUrl: viewBase + 'dataAdmin.html'
      })
      .when("/data_admin/adddata_admin/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addDataAdminController',
        templateUrl: viewBase + 'addDataAdmin.html'
      })
      .when("/data_admin/data_admin_details", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'dataAdminDetailsController',
        templateUrl: viewBase + 'dataAdminDetails.html'
      })
      .when("/data_admin/data_admin_settings/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'dataAdminSettingsController',
        templateUrl: viewBase + 'dataAdminSettings.html'
      })
      .when("/manager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'managerController',
        templateUrl: viewBase + 'manager.html'
      })
      .when("/homeLogoutMap/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'homeLogoutMapController',
        templateUrl: viewBase + 'homeLogoutMap.html'
      })
      .when("/manager/add_Region_manager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addRegionManagerController',
        templateUrl: viewBase + 'addRegionManager.html'
      })
      .when("/manager/add_Cluster_Manager", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addClusterManagerController',
        templateUrl: viewBase + 'addClusterManager.html'
      })
      .when("/tracking/trackingResponder/:emg_id", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'assignResponderController',
        templateUrl: viewBase + 'assignResponder.html'
      })
      .when("/manager/add_Community_Manager/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addCommunityManagerController',
        templateUrl: viewBase + 'addCommunityManager.html'
      })
      .when("/manager/add_Care_Coordinator/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'addCareCoordinatorController',
        templateUrl: viewBase + 'addCareCoordinator.html'
      })
      .when("/manager/manager_details/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'managerDetailsController',
        templateUrl: viewBase + 'managerDetails.html'
      })
      .when("/zone/", {
        resolve: {
          check: function($window) {
            if(!!sessionStorage.getItem('emailMobile')==false || !!sessionStorage.getItem('password')==false) {
              // console.log(sessionStorage.getItem('emailMobile'));
              $window.location = "../";
            }
          },
        },
        controller: 'zoneController',
        templateUrl: viewBase + 'zone.html'
      })
      .otherwise('/', {
        redirectTo: '/'
    });
      
    }])
    
    .run(["$rootScope","$window", '$location', 'md5','$timeout', function ($rootScope, $window, $location,md5,$timeout) {
    

      
      var socket = io.connect('http://13.233.7.113:5000');
      // console.log(socket);
      //  socket.on('set', function(data)
      //  {
          
          //  console.log(data);
          //  console.log(socket.id);
      //  });
      //  socket.emit('chat',"sushma," );
      //  socket.emit('chat',"sushma," + md5.createHash('abc'));
      //  console.log(md5.createHash('abc'));
      //  socket.on('1', function (data)
      socket.on('admin', function (data)
        {
    
           console.log(data);
           var alertdata = data;
           //  console.log(socket.id);
           // alert(JSON.stringify(data));
           // swal(("Sensor No:" +  alertdata));
           swal(("Sensor No:" +  alertdata.sensor_no + '\n' + "Alert msg:"+ alertdata.alert_msg +'\n'+ "Alert type:" + alertdata.alert_type +'\n'+"Alert_location:" +alertdata.alert_location));
          // $rootScope.value = JSON.stringify(data) ;
          // function myFunction() {
          //   $rootScope.datavalue = $rootScope.value ;
          // }
         });
         
  
}]);

   