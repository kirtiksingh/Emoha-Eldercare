/**
 * Created by sushma shukla on 02/05/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location','$filter','$http','zoneService'];
  var zoneController = function ($scope, $rootScope, $window, $location,$filter,  $http,zoneService) {
    
    $scope.search = function(item) {
      if (!$scope.query || (item.region_name.toLowerCase().indexOf($scope.query) != -1) || (item.region_location.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ||(item.rm_name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
          return true;
      }
      return false;
  };
  $scope.search1 = function(item1) {
    if (!$scope.query1 || (item1.region_name.toLowerCase().indexOf($scope.query1) != -1) || (item1.cluster_name.toLowerCase().indexOf($scope.query1.toLowerCase()) != -1) ||(item1.clm_name.toLowerCase().indexOf($scope.query1.toLowerCase()) != -1) ){
        return true;
    }
    return false;
};
$scope.search2 = function(item) {
  if (!$scope.query2 || (item.comm_name.toLowerCase().indexOf($scope.query2) != -1) || (item.cm_name.toLowerCase().indexOf($scope.query2.toLowerCase()) != -1) ||(item.cluster_name.toLowerCase().indexOf($scope.query2.toLowerCase()) != -1) || (item.region_name.toLowerCase().indexOf($scope.query2.toLowerCase()) !=-1)){
      return true;
  }
  return false;
};

$rootScope.regionManager = function () {
 
// $scope.customerDetailsdata = [];
$rootScope.regionManagerDetails = {};
zoneService.regionManager().success(function (result) {
 
  if (result) {
   
    $rootScope.regionManagerDetails = result;
   
    angular.forEach($rootScope.regionManagerDetails, function (element) {
   
     $rootScope.regionManagerDetailsvalue = element;
     
   
    })
   
  }
 
});
};

$rootScope.clusterManager = function () {
 
// $scope.customerDetailsdata = [];
$rootScope.clusterManagerDetails = {};
zoneService.clusterManager().success(function (result) {
 
  if (result) {
   
    $rootScope.clusterManagerDetails = result;
   
    angular.forEach($rootScope.clusterManagerDetails, function (element) {
    //  alert(element)
     $rootScope.clusterManagerDetailsvalue = element;
     
    //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
    })
   
  }
 
});
};

$rootScope.communityManager = function () {
 
// $scope.customerDetailsdata = [];
$rootScope.communityManagerDetails = {};
zoneService.communityManager().success(function (result) {
 
  if (result) {
   
    $rootScope.communityManagerDetails = result;
   
    angular.forEach($rootScope.communityManagerDetails, function (element) {
    //  alert(element)
     $rootScope.communityManagerDetailsvalue = element;
     
    //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
    })
   
  }
 
});
};

$scope.addRegion = 
{
region_name:"",
region_location:"",
region_address:"",
region_phone:"",
// region_status:"",
rm_id:"",
regiondata:"",

};
 $scope.addRegion = function(){
   $scope.region_name = $scope.addRegion.region_name;
   $scope.region_location = $scope.addRegion.region_location;
   $scope.region_address = $scope.addRegion.region_address;
   $scope.region_phone = $scope.addRegion.region_phone;
   $scope.rm_id = $scope.addRegion.regiondata.rm_id;
   zoneService.addRegionManagerdata($scope.region_name,$scope.region_location,$scope.region_address,$scope.region_phone,$scope.rm_id).success(function (result) {
    if (result) {
      alert(result);
      window.location = '/zone/' ; 
    }
    else{
      alert("error");
    }
  });
 };
 $scope.clearRegion = function(){
  $scope.addRegion.region_name = "";
  $scope.addRegion.region_location = "";
  $scope.addRegion.region_address = "";
  $scope.addRegion.region_phone = "";
  $scope.addRegion.regiondata.rm_id = "";
  $scope.addRegion.regiondata.rm_mob = "";
};

 $scope.addCluster = 
 {
  cluster_name:"",
  cluster_location:"",
  cluster_address:"",
  cluster_phone:"",
  // cluster_status:"",
  clm_id:"",
  region_id:"",
  clusterdata:"",
  regiondata:""
  }
  $scope.addCluster = function(){
    $scope.cluster_name = $scope.addCluster.cluster_name;
    $scope.cluster_location = $scope.addCluster.cluster_location;
    $scope.cluster_address = $scope.addCluster.cluster_address;
    $scope.cluster_phone = $scope.addCluster.cluster_phone;
    $scope.clm_id = $scope.addCluster.clusterdata.clm_id;
    $scope.region_id = $scope.addCluster.regiondata.rm_id;
    zoneService.addClusterManagerdata($scope.cluster_name,$scope.cluster_location,$scope.cluster_address,$scope.cluster_phone,$scope.clm_id,$scope.region_id).success(function (result) { 
     if (result) {
       alert(result);
       window.location = '/zone/' ;
     }
     else{
       alert("error");
     }
   });
  };
  $scope.clearCluster = function(){
    $scope.addCluster.cluster_name = "";
    $scope.addCluster.cluster_location = "";
    $scope.addCluster.cluster_address = "";
    $scope.addCluster.cluster_phone = "";
    $scope.addCluster.clusterdata.clm_id = "";
    $scope.addCluster.regiondata.rm_id = "";
    $scope.addCluster.clusterdata.clm_mob = "";
  };

  $scope.addCommunity = 
{
  comm_name:"",
  comm_location:"",
  comm_address:"",
  comm_phone:"",  
  cluster_id:"",
  cm_id:"",
 clusterdata:"", 
 communitydata:""
};
 $scope.addCommunity = function(){
   $scope.comm_name = $scope.addCommunity.comm_name;
   $scope.comm_location = $scope.addCommunity.comm_location;
   $scope.comm_address = $scope.addCommunity.comm_address;
   $scope.comm_phone = $scope.addCommunity.comm_phone;
   $scope.cluster_id = $scope.addCommunity.clusterdata.clm_id;
   $scope.cm_id = $scope.addCommunity.communitydata.cm_id;
   zoneService.addCommunityManagerData($scope.comm_name,$scope.comm_location,$scope.comm_address,$scope.comm_phone,$scope.cluster_id,$scope.cm_id).success(function (result) {
    if (result) { 
      alert(result);
      window.location = '/zone/' ;
    }
    else{
      alert("error");
    }
  });
 };
 $scope.clearCommunity = function(){
  $scope.addCommunity.comm_name = "";
  $scope.addCommunity.comm_location = "";
  $scope.addCommunity.comm_address = "";
  $scope.addCommunity.comm_phone = "";
  $scope.addCommunity.clusterdata.clm_id = "";
  $scope.addCommunity.communitydata.cm_id = "";
  $scope.addCommunity.clusterdata.region_name = "";
  $scope.addCommunity.communitydata.cm_mob = "";
};

 $scope.getRegionData = function () {
 
 
  $scope.getregionManagerdata = {};
  zoneService.getRegionManagerData().success(function (result) {
   
    if (result) {
    
      $scope.getregionManagerdata = result;
     
      angular.forEach($scope.getregionManagerdata, function (data) {
     
       $scope.getregionManagerdatavalue = data;
       
       
     
      })
     
    }
   
  });
};

$scope.getClusterData = function () {
 
  $scope.getClusterManagerdata = {};
  zoneService.getClusterData().success(function (result) {
   
    if (result) {
    
      $scope.getClusterManagerdata = result;
     
      angular.forEach($scope.getClusterManagerdata, function (data) {
     
       $scope.getClusterManagerdatavalue = data;
     
      })
     
    }
   
  });
};

$scope.getCommunityData = function () {
 
  $scope.getCommunityManagerdata = {};
  zoneService.getCommunityData().success(function (result) {
   
    if (result) {
    
      $scope.getCommunityManagerdata = result;
     
      angular.forEach($scope.getCommunityManagerdata, function (data) {
     
       $scope.getCommunityManagerdatavalue = data;
     
      })
     
    }
   
  });
};

$scope.getAlldata= function () {
 
  $scope.getAllValue = {};
  zoneService.getAlldata().success(function (result) {
   
    if (result) {
    
      $scope.getAllValue = result;
     
      angular.forEach($scope.getAllValue, function (data) {
     
       $scope.getAllValueData = data;
     
      })
     
    }
   
  });
};

  };
  zoneController.$inject = injectParams;
  angular.module('seniorApp').controller('zoneController', zoneController);
}());
