'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','sensorConfigService','homeLogoutMapService'];
  var sensorConfigController = function ($scope,$rootScope,$location,$filter,sensorConfigService,homeLogoutMapService) {

    $scope.isDisabled = true;
    $scope.complete=function(string){
			
      var output=[];
      // var outputaddress = [];
      angular.forEach($rootScope.customerDetails,function(customername){
            if(customername.cust_name.toLowerCase().indexOf(string.toLowerCase())>=0){
                output.push(customername);
            }
           
          });
          $scope.filterCountry=output;
          $scope.totalcustomerData =  $scope.filterCountry.length;
        };
		$scope.fillTextbox=function(string){
      $scope.customername = string.cust_name;
      $rootScope.customerIdData = string.cust_id;
      $scope.filterCountry=null;
      $scope.isDisabled = false;
      $rootScope.custmerDetails();
      // $scope.address = $scope.customername;
		};
    
    $scope.selectedalerttype = {};

    $scope.alertType = 
    [
      {
        
        "name":"Select Alert Type",
       },
      {
      "selected":false,
      "name":"Civil",
     },
    {
      "selected":false,
      "name":"Health",
     },
     
    ];
    $scope.selectedalerttype   =   $scope.alertType[0];  

    $scope.selectedalertlocation = {};

    $scope.alertlocation = 
    [
      {
        
        "name":"Select Sensor Type",
       },
      {
      "selected":false,
      "name":"Fire",
     },
    {
      "selected":false,
      "name":"Gas Detector",
     },
     {
      "selected":false,
      "name":"Motion Sensor",
     },
     {
      "selected":false,
      "name":"Door Sensor",
     },
     {
      "selected":false,
      "name":"Temperature Sensor",
     },
     {
      "selected":false,
      "name":"Vibration Sensor",
     },
     {
      "selected":false,
      "name":"Panic",
     },
     {
      "selected":false,
      "name":"Glass Break Sensor",
     },
     {
      "selected":false,
      "name":"Power",
     },
    ];
    $scope.selectedalertlocation   =   $scope.alertlocation[0];  

    $rootScope.custmerDetails = function () {
   
      $scope.customerDetailsdata = [];
      $scope.searchValue = $rootScope.customerIdData;
      $rootScope.customerDetails = {};
      sensorConfigService.custmerDetails().success(function (result) {
       
        if (result) {
         
          $rootScope.customerDetails = result;
            angular.forEach($rootScope.customerDetails,function(searchData){
              if(searchData.cust_id ==  $scope.searchValue ){
                $rootScope.searchFilterData = searchData;
                $rootScope.searchId = searchData.cust_id;
                $rootScope.searchName = searchData.cust_name;
                $rootScope.searchAddress = searchData.cust_address;
                $rootScope.searchMobileNo = searchData.cust_mob;
                $rootScope.searchAlertNo = searchData.alert_mob;
                $scope.sensordata();
                $scope.getRoomType();
              }
            });
         
          angular.forEach($rootScope.customerDetails, function (element) {
          //  alert(element)
           $rootScope.customerDetailsvalue = element;
           $rootScope.custIdValue = $rootScope.customerDetailsvalue.cust_id;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    $scope.gethomeLogoutMap = function () {
      $rootScope.gethomeLogoutMapData = {};
      $scope.homeValueId = $rootScope.custIdvalue;
      homeLogoutMapService.gethomeLogoutMap().success(function (result) {  
        if (result) {
          $rootScope.gethomeLogoutMapData = result;
          angular.forEach($rootScope.gethomeLogoutMapData, function (element) {
            $scope.valueLogout = element;
            $scope.logoutID = $scope.valueLogout.cust_id;
            if($scope.homeValueId == $scope.logoutID ){
              $scope.Idrelateddata =  $scope.valueLogout;
              // $scope.sensorroom = $scope.sensoralldata.room_type;
            }
        })
        }
      });
    };
    $scope.sensordata = function(){
      // $rootScope.searchId = searchData.cust_id;
      // $rootScope.searchName = searchData.cust_name;
      // $rootScope.searchAddress = searchData.cust_address;
      // $rootScope.searchMobileNo = searchData.cust_mob;
      // $rootScope.searchAlertNo = searchData.alert_mob;
 
      $rootScope.custIdvalue =  $rootScope.searchId;
      $rootScope.custnamevalue = $rootScope.searchName;
      sensorConfigService.sensordata($rootScope.custIdvalue).success(function (result) {   
           if(result){
             
            $scope.getSensorData = result;
            $rootScope.sensordataCustId = $scope.getSensorData[0].cust_id;
            // $scope.getSensorConfigData();
            $scope.getRoomType();
           }
          
          });
    };
   
    $scope.getRoomType = function(){
      $rootScope.roomTypeValue = $rootScope.searchId;
      sensorConfigService.getRoomType($rootScope.roomTypeValue).success(function (result) {   
           if(result){         
            $rootScope.roomTypeData = result;
            $scope.getSensorConfigData();
           }    
          });
    };
    $scope.RoomType = function(){
      $scope.roomValue = $rootScope.roomTypeData;
    };
    $scope.sensorValue = function(){
      $scope.valueId = $rootScope.custIdvalue;
      $scope.valueName =  $rootScope.custnamevalue;
      $scope.sensorIddata =  $rootScope.gethomeLogoutMapData;
      angular.forEach($scope.sensorIddata, function (element) {
              $scope.sensorValue = element;
              $scope.sensorID = $scope.sensorValue.cust_id;
              if($scope.valueId == $scope.sensorID){
                $scope.sensoralldata =  $scope.sensorValue;
                $scope.sensorroom = $scope.sensoralldata.room_type;
                // $scope.getRoomType();
              }
          });
    };
    $scope.addsesorconfig = {
      cust_id:"",
      sensor_no:"",
      alert_msg:"",
      alert_type:"",
      alert_location:"",
    }
    $scope.addSensorConfig = function () {
      $scope.id = $rootScope.roomId;
      $scope.room_name = $rootScope.roomName;
      $scope.cust_id = $rootScope.custIdvalue;
      $scope.sensor_no = $scope.addsesorconfig.sensor_no ;
      $scope.addsesorconfig.alert_msg = $scope.selectedalertlocation.name;
      $scope.alert_msg = $scope.addsesorconfig.alert_msg ;
      $scope.addsesorconfig.alert_type = $scope.selectedalerttype.name; 
      $scope.alert_type = $scope.addsesorconfig.alert_type ;
      $scope.alert_location = $scope.ValueData.room_type;
     sensorConfigService.addSensorConfig($scope.id,$scope.room_name,$scope.cust_id,$scope.sensor_no,$scope.alert_msg, $scope.alert_type,$scope.alert_location ).success(function (result) {   
       if(result=="success"){
         alert("Your Sensor Information Added Successfully");
        //  window.location = '/sensorConfig/' ;
        $scope.getSensorConfigData();
       } 
      });
    };

    $scope.removesensorconfig = function(cust_id,sensor_no){
      $scope.cust_id = cust_id;
      $scope.sensor_no = sensor_no;
      sensorConfigService.removesensorconfig($scope.cust_id,$scope.sensor_no).success(function (result) {   
        if(result=="success"){
          alert("Your Sensor Remove Successfully");
         //  window.location = '/sensorConfig/' ;
         $scope.getSensorConfigData();
        } 
       });
    }
    $scope.clearSensorConfig = function () {
      $scope.ValueData = "";
      $scope.addsesorconfig.sensor_no = "";
      $scope.addsesorconfig.alert_msg = "";
      $scope.selectedalerttype = $scope.alertType[0];
      $scope.selectedalertlocation = $scope.alertlocation[0];
    //  $scope.alert_location = "";
    //  sensorConfigService.addSensorConfig($scope.cust_id,$scope.sensor_no,$scope.alert_msg,$scope.alert_type,$scope.alert_location).success(function (result) {   
    //    if(result=="success"){
    //      alert("Your Sensor Information Added Successfully");
    //      window.location = '/sensorConfig/' ;
    //    } 
    //   });
    };
    $scope.getSensorConfigData = function () {
      $scope.sensorId =  $rootScope.roomTypeValue ;
     sensorConfigService.getSensorConfigData($scope.sensorId).success(function (result) {   
       if(result){  
        $scope.getSensorConfigDataValue = result;
        $rootScope.sensorConfigdataCustId = $scope.getSensorConfigDataValue[0].cust_id;
        angular.forEach( $scope.getSensorConfigDataValue, function (element) {  
      });
       };
       
      });
    };
    $scope.checkSensorNo = function () {
      $scope.custId =  $rootScope.custIdvalue ; 
      $scope.sensorNo =  JSON.parse($scope.addsesorconfig.sensor_no); 
     sensorConfigService.checkSensorNo($scope.custId,$scope.sensorNo).success(function (result) {   
       if(result){
         $scope.sensorNoValue = JSON.parse(result[0].sensor_no);
          if($scope.sensorNo ==  $scope.sensorNoValue){
            $scope.message = "Sensor No Already Exit";
          }
       }; 
      });
    };
   
    $scope.roomTypeId = function(){
      $rootScope.roomId = $scope.ValueData.id;  
      $rootScope.roomName =  $scope.ValueData.room_name;
    }
    };

    sensorConfigController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('sensorConfigController', sensorConfigController)
  })();