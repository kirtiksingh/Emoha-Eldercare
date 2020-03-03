'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','emergencyCasesService'];
  var emergencyCasesController = function ($scope,$rootScope,$location,$filter,emergencyCasesService) {

    $scope.search = function(item) {
      if (!$scope.query || (item.cust_name.toLowerCase().indexOf($scope.query) != -1) || (item.emg_case_no.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
          return true;
      }
      return false;
  };
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
 $scope.emergencyId = function(emg_id){
  $rootScope.emergencyIdValue = emg_id;
 };
 
  $scope.assignEmergencyData = function () {
   $scope.valuedate =  $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
    $scope.datetime = $scope.valuedate;
     $scope.cust_id = $scope.emrgCaseData.customerId.cust_id; 
    $scope.emg_msg = $scope.emrgCaseData.emg_msg;
    $scope.emg_status = $scope.emrgCaseData.emg_status;
    $scope.emrgCaseData.emg_type = $scope.selectedemrgtype.name;
    $scope.emg_type = $scope.emrgCaseData.emg_type;
    $scope.emg_recv_mode = $scope.emrgCaseData.emg_recv_mode;
    $scope.emg_desc = $scope.emrgCaseData.emg_desc;
    $scope.emg_location = $scope.emrgCaseData.emg_location;
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
   $scope.suspenddata = function(){
     $scope.suspendId = $rootScope.Id;
     $scope.emg_status = "suspend";
     emergencyCasesService.suspend( $scope.suspendId,$scope.emg_status).success(function (result){
       if(result){
         alert("Your Emergency Suspended");
         window.location = '/tracking/';
       }
     });
   }
   $scope.closeddata = function(){
    $scope.suspendId = $rootScope.closeId;
    $scope.emg_status = "suspend";
    emergencyCasesService.suspend( $scope.suspendId,$scope.emg_status).success(function (result){
      if(result){
        alert("Your Emergency Closed");
        window.location = '/tracking/';
      }
    });
  }
   $scope.suspend = function(emg_id){
    $rootScope.Id = emg_id;
   }
   $scope.closed = function(emg_id){
    $rootScope.closeId = emg_id;
   }
   $scope.emergencyDetailsData = function () {
    $rootScope.emergencyDetails = {};
    emergencyCasesService.emergencyDetailsData().success(function (result) {
      if (result) {
        $rootScope.emergencyDetails = result;
        $rootScope.total = $rootScope.emergencyDetails.length;
        angular.forEach($rootScope.emergencyDetails, function (element) {
         $scope.emergencyDetailsvalue = element.emg_date_time;
        
        });
        
      }
    });
  };
  $scope.viewdata = function (emg_id) {
    $rootScope.viewId = emg_id;
    emergencyCasesService.viewdata(emg_id).success(function (result) {  
      if (result) { 
        $rootScope.viewdataDetails = result;
        $rootScope.viewId = $rootScope.viewdataDetails[0].flag_monitoring;
      }
    });
  };
  $scope.getFlagValue = function(emg_id){
    $rootScope.emg = emg_id; 
    emergencyCasesService.getFlagValue($scope.emg).success(function (result) {
      if (result) {
        $scope.flag = result;
        $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
        // $scope.btnEnabler($rootScope.emg);  
      }  
    });
  };
  $scope.responderdataValue = function(){
    // $rootScope.emg = emg_id; 
    emergencyCasesService.responderdataValue().success(function (result) {
      if (result) {
        $scope.responderiddetail = result;
        // $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
       
      }  
    });
  };
  $scope.monitoringdata = function () {
    $scope.monitoringDetails = {};
    emergencyCasesService.monitoringdata().success(function (result) {  
      if (result) {
        $scope.monitoringDetails = result;
        angular.forEach($scope.monitoringDetails, function (element) {
         $rootScope.monitoringvalue = element;
          // if(element.emg_source == "sensor"){
            //  $scope.emgsensorId = element.emg_id;
            //  $scope.emergencyYear = (element.emg_date_time.slice(0,4));
            //  $scope.emergencyMonth = (element.emg_date_time.slice(5,7));
            //  $scope.emergencyDate = (element.emg_date_time.slice(8,10));
            //  $scope.emergencyTime = (element.emg_date_time.slice(10,19));
            //  $scope.dateValue = ($scope.emergencyYear);
            //  output.push($scope.emergencyYear);
            //  $scope.emergencyMonth = JSON.parse(element.emg_date_time.split("/")[1]);
           
          // }
         
        //  $scope.emgDataId = element.emg_id;
        //  emergencyCasesService.emgIdData($scope.emgDataId).success(function (result) {
        //    if(result){
        //       $scope.responderName = result[0].rsp_name;
        //    }
         
        //  });
        });
        
      }
    });
  };
  $scope.pagerefresh = function(){
    window.location = '/tracking/'
  };
  
  $scope.assigndatavalue = function(emg_case_no){
    $scope.assigndataDetails = {};
    // $rootScope.emrgdataId = emg_case_no;
    emergencyCasesService.assigndatavalue(emg_case_no).success(function (result) {
      if (result) {
        $rootScope.assigndataDetails = result;
       
      }
    });
  };
  $scope.update = function(responder){
    $rootScope.responderDataValue = responder.split("- ID - ")[1];
    $scope.ValueIddata = $rootScope.responderDetails ;
    angular.forEach($scope.ValueIddata, function (element) {
      //  alert(element)
      $scope.valueResponder = JSON.stringify(element.rsp_id);
       $rootScope.respondervalue = ($rootScope.responderDataValue);
       if($scope.valueResponder == $rootScope.respondervalue){
        $rootScope.selectedResponderId = element.rsp_id;
        $rootScope.selectedResponderComm = element.comm_id;
        $rootScope.selectedResponderMobile = element.res_mob;
       
       }
      //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
      })
  }
  $scope.getResponderData = function (cluster) {
    // $scope.customerDetailsdata = [];
    $rootScope.responderDetails = {};
    $scope.cluster_id = cluster;
    emergencyCasesService.getResponderData($scope.cluster_id).success(function (result) {
     
      if (result) {
       
        $rootScope.responderDetails = result;
        angular.forEach($rootScope.responderDetails, function (element) {
        //  alert(element)
        $scope.valueResponder = $rootScope.responderDataValue;
         $rootScope.respondervalue = element;
         
        //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
        })
       
      }
     
    });
  };
$scope.responderdata =
  {
    emg_id:"",
    rsp_id:"",
    responderId: "",
    emg_case_no:"",
    emg_date_time:"",
    cust_name:"",
    emg_location:"",
    cust_mob:"",
    emg_type :"",
    emg_desc:"",
    res_mob:"",
    emg_msg:""
 }
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
   $scope.rsp_id =  $rootScope.selectedResponderId;
   $scope.comm_id = $rootScope.selectedResponderComm;
   $scope.res_mob = $rootScope.selectedResponderMobile;
   $scope.emg_msg = $scope.assigndataDetails[0].emg_msg;
   emergencyCasesService.assignResponderData($scope.emg_case_no,$scope.emg_date_time,$scope.cust_name,$scope.cust_id,$scope.emg_location,$scope.cust_mob,$scope.emg_type, $scope.emg_desc,$scope.emg_id,$scope.rsp_id,$scope.comm_id,$scope.res_mob,$scope.emg_msg).success(function (result) {
    if (result) {
      alert("Assign Successfully" );
      window.location = '/tracking/';
    }
    else{
      alert("error");
    }
  })
 }
    };

    emergencyCasesController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('emergencyCasesController', emergencyCasesController)
  })();