'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter', 'monitoringService'];
  var monitoringController = function ($scope,$rootScope,$location,$filter,monitoringService) {

    $scope.search = function(item) {
      if (!$scope.query || (item.cust_name.toLowerCase().indexOf($scope.query) != -1) || (item.emg_case_no.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
          return true;
      }
      return false;
  };
$scope.flag = {
  date:""
}
$scope.buttonActivation2 = function(){
  $scope.flagvalue = 2 ;
  $rootScope.emgValue =  $rootScope.emg;
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emgValue,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emgValue);
      // $scope.disabled = true;
      // $scope.disabled1 = false;
      // $scope.disabled2 = true;
      // $scope.disabled3 = true;
      // $scope.disabled4 = true;
    };  
  });
};
$scope.assignResponderData = function (){
  $scope.emg_case_no = $scope.assigndataDetails[0].emg_case_no;
  $scope.emg_date_time = $scope.assigndataDetails[0].emg_date_time;
  $scope.cust_name = $scope.assigndataDetails[0].cust_name;
  $scope.cust_id = $scope.assigndataDetails[0].cust_id;
  $scope.emg_location = $scope.assigndataDetails[0].emg_location;
  $scope.cust_mob =$scope.assigndataDetails[0].cust_mob;
  $scope.emg_type = $scope.assigndataDetails[0].emg_type;
  $scope.emg_desc = $scope.assigndataDetails[0].emg_desc;
  $scope.emg_id = $rootScope.assigndataDetails[0].emg_id;
  $scope.rsp_id = $scope.responderdata.responderId.rsp_id;
  $scope.comm_id = $scope.responderdata.responderId.comm_id;
  $scope.res_mob = $scope.responderdata.responderId.res_mob;
  $scope.emg_msg = $scope.assigndataDetails[0].emg_msg;
 
 
  monitoringService.assignResponderData($scope.emg_case_no,$scope.emg_date_time,$scope.cust_name,$scope.cust_id,$scope.emg_location,$scope.cust_mob,$scope.emg_type, $scope.emg_desc,$scope.emg_id,$scope.rsp_id,$scope.comm_id,$scope.res_mob,$scope.emg_msg).success(function (result) {
   if (result) {
     alert("Assign Successfully" );
     window.location = '/monitoring/';
   }
   else{
     alert("error");
   }
 })
}
$scope.pagerefresh = function(){
  window.location = '/monitoring/';
};
$scope.assigndatavalue = function(emg_case_no){
  $scope.assigndataDetails = {};
  // $rootScope.emrgdataId = emg_case_no;
  monitoringService.assigndatavalue(emg_case_no).success(function (result) {
    if (result) {
      $rootScope.assigndataDetails = result;
      //  window.location = '/monitoring/';
    }
  });
};
// $scope.btn2 = function(){

//   if($rootScope.flagValue1 == 2){
//     $scope.disabled = true;
//   }
// }
// $scope.btn3 = function(){
//     if($rootScope.flagValue1 == 3){
//       $scope.disabled1 = true;
//       $scope.disabled = true;
//     }
//   };
//   $scope.btn4 = function(){
//       if($rootScope.flagValue1 == 4){
//         $scope.disabled2 = true;
//         $scope.disabled1 = true;
//         $scope.disabled = true;
//       }
//     }
//     $scope.btn5 = function(){
//         if($rootScope.flagValue1 == 5){
//           $scope.disabled3 = true;
//           $scope.disabled1 = true;
//           $scope.disabled2 = true;
//           $scope.disabled = true;
//         }
//       }
//       $scope.btn6 = function(){
//           if($rootScope.flagValue1 == 6){
//             $scope.disabled4 = true;
//             $scope.disabled1 = true;
//             $scope.disabled2 = true;
//             $scope.disabled3 = true;
//             $scope.disabled = true;
//           }
//         }
$scope.getFlagValue = function(emg_id){
  $rootScope.emg = emg_id; 
  monitoringService.getFlagValue($scope.emg).success(function (result) {
    if (result) {
      $scope.flag = result;
      $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
      // $scope.btnEnabler($rootScope.emg);  
    }  
  });
};

$scope.btnEnabler = function(emg_id){
    
    // if($rootScope.flagValue1 == 2){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = false;
    //   $scope.disabled3 = true;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = true;
    //   }

    // if($rootScope.flagValue1 == 3){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = false;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = true;
    //   }
    // if($rootScope.flagValue1 == 4){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = false;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = true;
    //   }
    // if($rootScope.flagValue1 == 5){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = true;
    //   $scope.disabled4 = false;
    //   $scope.disabled5 = true;
    //   }
    // if($rootScope.flagValue1 == 6){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = true;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = false;
    //       }
}

// $scope.flagdatavalue5 = "Activated";
$scope.buttonActivation3 = function(){
  $scope.flagvalue = 3 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = false;
      $scope.disabled3 = true;
      $scope.disabled4 = true;
    }  
  });
};
$scope.buttonActivation4 = function(){
  $scope.flagvalue = 4 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = true;
      $scope.disabled3 = false;
      $scope.disabled4 = true;
    }  
  });
};
$scope.buttonActivation5 = function(){
  $scope.flagvalue = 5 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date ,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = true;
      $scope.disabled3 = true;
      $scope.disabled4 = false;
    }  
  });
};
$scope.buttonActivation6 = function(){
  $scope.flagvalue = 6 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = true;
      $scope.disabled3 = true;
      $scope.disabled4 = true;
    }  
  });
};

// $scope.buttonActivation6 = function(){
//   $scope.flagvalue = 6 ;
//   $scope.emg = $rootScope.viewId;
//   $scope.flagdatavalue6 = "Activated";
//   monitoringService.buttonActivation($scope.emg,$scope.flagvalue).success(function (result) {
//     if (result == "success") {
//       $scope.flagdatavalue6 = "Done";
//     }
//     else{
//       $scope.flagdatavalue6 = "Activated";
//     }
//   });
// };
$scope.getResponderData = function () {
  // $scope.customerDetailsdata = [];
  $rootScope.responderDetails = {};
  monitoringService.getResponderData().success(function (result) {
    if (result) { 
      $rootScope.responderDetails = result;
      angular.forEach($rootScope.responderDetails, function (element) {
      //  alert(element)
       $rootScope.respondervalue = element;
      //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
      })
    }
  });
};
$scope.viewResponder = function (emg_id){
   $scope.respnderViewId = emg_id;
   monitoringService.viewResponder($scope.respnderViewId).success(function (result) {
    if (result) {
      $rootScope.viewResponderDetails = result;
    } 
  });
};
  $scope.monitoringdata = function () {
    $scope.monitoringDetails = {};
    monitoringService.monitoringdata().success(function (result) {  
      if (result) {
        $scope.monitoringDetails = result;
        angular.forEach($scope.monitoringDetails, function (element) {
         $rootScope.monitoringvalue = element;
        //  if($rootScope.monitoringvalue.flag_monitoring == 1){
        //    $scope.flagdata = "Done";
        //  }
        //   else{
        //     $scope.flagdata = "Activated";
        //   }
        })
      }
    });
  };
  $scope.viewdata = function (emg_id) {
    $rootScope.viewId = emg_id;
    monitoringService.viewdata(emg_id).success(function (result) {  
      if (result) { 
        $rootScope.viewdataDetails = result;
        $rootScope.viewId = $rootScope.viewdataDetails[0].flag_monitoring;
      }
    });
  };
  $scope.getRemark = function (emg_id) {
    $rootScope.remarkId = emg_id;
    monitoringService.getRemark($scope.remarkId).success(function (result) {  
      if (result) { 
        $rootScope.RemarkdataDetails = result;
        // window.location = '/monitoring/#Remark2'
      }
    });
  };
  $scope.addRemarkvalue = {
    emg_id:"",
    remark:"",
    r_datetime:"",
    r_user:"Control Room"
  }
  $scope.addRemark = function () {
    $scope.addRemarkvalue.emg_id = $rootScope.remarkId;
    $scope.emg_id = $scope.addRemarkvalue.emg_id;
    // $scope.emg_id = $scope.addRemarkvalue.emg_id;
    $scope.addRemarkvalue.r_datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
    $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a');
    $scope.r_datetime = $scope.addRemarkvalue.r_datetime;
    $scope.remark = $scope.addRemarkvalue.remark;
    $scope.r_user = $scope.addRemarkvalue.r_user;
    monitoringService.addRemark($scope.emg_id, $scope.r_datetime,$scope.remark,$scope.r_user).success(function (result) {  
      if (result == "ok") { 
        $scope.remarkDetails = result;
        // window.location = '/monitoring/#Remark2'
        // $scope.getRemark();
      }
    });
  };
    };
    monitoringController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('monitoringController',monitoringController)
  })();