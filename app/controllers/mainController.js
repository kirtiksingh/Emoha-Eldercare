/**
 * Created by root on 18/4/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window','$filter', '$location','$http','mainService','LocalStorageService','emergencyCasesService','customerService','responderService'];
  var mainController = function ($scope, $rootScope, $window,$filter, $location,  $http, mainService,LocalStorageService,emergencyCasesService,customerService,responderService) {
    $scope.selectedemrgtype = {};

    $scope.emrgType = 
    [
     {
      
       "name":"Select Emergency Type",
      },
      {
      "selected":false,
      "name":"Health",
     },
    {
      "selected":false,
      "name":"Safety",
     },
     
    ];
    $scope.selectedemrgtype   =   $scope.emrgType[0]; 
    
    var that = this;
  
  this.date = {
    value: new Date(),
    showFlag: false
  };
  
  this.openCalendar = function(e, date) {
      that.open[date] = true;
  };
  $rootScope.custmerDetails = function () {
   
    $scope.customerDetailsdata = [];
    $rootScope.customerDetails = {};
    mainService.custmerDetails().success(function (result) {
     
      if (result) {
       
        $rootScope.customerDetails = result;
       
        angular.forEach($rootScope.customerDetails, function (element) {
        //  alert(element)
         $rootScope.customerDetailsvalue = element;
         
        //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
        })
       
      }
     
    });
  };
  
  $scope.emrgCaseData =
  {
    cust_id:"",
    // emg_date_time:"",
    emg_msg:"",
    emg_status:"new",
    emg_type:"",
    emg_recv_mode:"phone",
    emg_desc:"",
    emg_location:"",
    resp_start_time:"",
    est_time_reach:"",
    reaching_time:"",
    closing_time:"",
    cust_remark:"",
    cur_resp_stage:"",
    customerId:"",
 
 }
  $scope.assignEmergencyData = function () {
    $scope.valuedatetime =  $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
     $scope.datetime = $scope.valuedatetime;
      $scope.cust_id = $scope.emrgCaseData.customerId.cust_id; 
     $scope.emg_msg = $scope.emrgCaseData.emg_msg;
     $scope.emg_status = $scope.emrgCaseData.emg_status;
     $scope.emrgCaseData.emg_type = $scope.selectedemrgtype.name;
     $scope.emg_type = $scope.emrgCaseData.emg_type;
     $scope.emg_recv_mode = $scope.emrgCaseData.emg_recv_mode;
     $scope.emg_desc = $scope.emrgCaseData.emg_desc;
     $scope.emg_location = $scope.emrgCaseData.customerId.cust_address;
     $scope.resp_start_time = $scope.emrgCaseData.resp_start_time;
     $scope.est_time_reach = $scope.emrgCaseData.est_time_reach;
     $scope.reaching_time = $scope.emrgCaseData.reaching_time;
     $scope.closing_time = $scope.emrgCaseData.closing_time;
     $scope.cust_remark = $scope.emrgCaseData.cust_remark;
     $scope.cur_resp_stage = $scope.emrgCaseData.cur_resp_stage;
     emergencyCasesService.assignEmergencyData($scope.datetime,$scope.cust_id,$scope.emg_msg,$scope.emg_status,$scope.emg_type,$scope.emg_recv_mode,$scope.emg_desc,$scope.emg_location,$scope.resp_start_time,$scope.est_time_reach,$scope.reaching_time,$scope.closing_time,$scope.cust_remark,$scope.cur_resp_stage).success(function (result) {
       if (result) {
         alert("Add emergency Cases Successfully" );
         window.location = '/tracking/' ;
       }
       else{
         alert("error");
       }
     })
    };
  $scope.emergencyDetailsData = function () {
   
    $scope.emergencyDetails = {};
    mainService.emergencyDetailsData().success(function (result) {
      if (result) {
        $scope.emergencyDetails = result;
       
        angular.forEach($scope.emergencyDetails, function (element) {
         $scope.emergencyDetailsvalue = element;
        
        }) 
      }
    });
  };
  $scope.monitoringdata = function () {
    $scope.monitoringDetails = {};
    mainService.monitoringdata().success(function (result) {  
      if (result) {
        $scope.monitoring = result;
        $scope.totalProcessing = $scope.monitoring.length;
       
        angular.forEach($scope.monitoringDetails, function (element) {
         $rootScope.monitoringvalue = element;
        
        })
      
      }
    });
  };
  $scope.getResponderData = function () {
    $scope.responderDetails = {};
    mainService.getResponderData().success(function (result) {
      if (result) {
        $scope.responderDetailsData = result;
        $scope.totalResponder = $scope.responderDetailsData.length;
        angular.forEach($scope.responderDetailsData, function (element) {
         $scope.respondervalue = element;
         $scope.value = JSON.stringify(element.rsp_name);
        //  swal(($scope.value));
        
          // swal(($scope.value));
          
        }) 
      }  
    });
  };

  $scope.emergencyDetailsData = function () {
    $rootScope.emergencyDetails = {};
    emergencyCasesService.emergencyDetailsData().success(function (result) {
      if (result) {
        $rootScope.emergencyDetails = result;
        $rootScope.total = $rootScope.emergencyDetails.length;
        angular.forEach($rootScope.emergencyDetails, function (element) {
         $scope.emergencyDetailsvalue = element;
          // if( $scope.emergencyDetailsvalue.emg_source == "App Button"){
          //   alert($scope.emergencyDetailsvalue.emg_source);
          // }
        }) 
      }
    });
  };
  $scope.customerData = function () {
    $scope.customerDataDetails = {};
    emergencyCasesService.customerData().success(function (result) {
      if (result) {
        $scope.customerDataDetails = result;
        angular.forEach($scope.customerDataDetails, function (element) {
         $scope.customerDataDetailsvalue = element;
        
        })
      }
    });
  };
  $rootScope.custmerDetails = function () {
   
    $scope.customerDetailsdata = [];
    $rootScope.customerDetails = {};
    customerService.custmerDetails().success(function (result) {
      if (result) { 
        $rootScope.customerDetails = result;
        $scope.totalCustomer =  $rootScope.customerDetails.length;
      
        angular.forEach($rootScope.customerDetails, function (element) {
        //  alert(element)
         $rootScope.customerDetailsvalue = element;
        //  var global = element;
        //  swal(("customerId:-" +global.cust_id+'\n' + "hfgh" +'\n' + "hfgh") );         
        //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
        })
       
      }
     
    });
  };
  // $scope.add = function(){
  //   swal("Deleted!", "Your imaginary file has been deleted.");
  // };
    $scope.loginByAdmin = function(){
      $scope.adminLoginModel = {};
      $scope.adminLoginModel.email = LocalStorageService.get('emailMobile');
      $scope.adminLoginModel.password = LocalStorageService.get('password');
    };
    


  };
  mainController.$inject = injectParams;
  angular.module('seniorApp').controller('mainController', mainController);
}());
