'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addDataAdminService'];
  var addDataAdminController = function ($scope,$rootScope,$location,$filter,addDataAdminService) {


 
 
  //  $scope.custvalue.value =   $rootScope.customerDetails ; 
  $scope.customerIdData = function(){
    $scope.customerId = $rootScope.customerIdValue ;
    addDataAdminService.customerId($scope.customerId).success(function (result) {
     
      if (result) {
       
        $scope.customerIdDetailsData = result;
        $scope.adldata= $scope.customerIdDetailsData[0].eating_asst_level;

        if($scope.adldata == "1"){
            $scope.adl="Total Assist(Elder does less then 25%)"
          }
            else if($scope.adldata =="2"){
             $scope.adl="Maximal Assist(elder does 75%+)"
            }
            else if($scope.adldata =="3"){
              $scope.adl="Modirate Assist(Elder does 50%+)"
             }
             else if($scope.adldata =="4"){
              $scope.adl="Minimal assist (Elder does 75%+)"
             }
             else if($scope.adl =="5"){
              $scope.adl="Supervision only(elder does 100%+)"
             }
             else if($scope.adl =="6"){
              $scope.adl="Modified indipendent(Using Device And No helper)"
             }
             else if($scope.adl =="7"){
              $scope.adl="(Complete Independent and no Helper)"
             }
        $scope.groomdata =$scope.customerIdDetailsData[0].grooming_asst_level;

        if($scope.groomdata == "1"){
          $scope.groom="Total Assist(Elder does less then 25%)"

        }
          else if($scope.groomdata == "2"){
              $scope.groom="Maximal Assist(Elder does 75%+)"

            }
          else if($scope.groomdata == "3"){
              $scope.groom="Moderate Assist(Elder does 50% +)"
    
            }
            else if($scope.groomdata == "4"){
              $scope.groom="Minimal Assist(Elder does 75% +)"
    
            }
            else if($scope.groomdata == "5"){
              $scope.groom="Supervision only (Elder does 100%+)"
    
            }
            else if($scope.groomdata == "6"){
              $scope.groom="Modified Independent (Using Device And No Helper)"
    
            }
            else if($scope.groomdata == "7"){
              $scope.groom="(Complete Independent And No Helper)"
    
            }

        $scope.bathdata= $scope.customerIdDetailsData[0].bathing_asst_level;
           if($scope.bathdata == "1"){
             $scope.bathing="Total Assist(Elder does less then 25%) "
              }
            else if($scope.bathdata == "2"){
                $scope.bathing=" Maximal Assist(Elder does 75%+)"
               }
               else if($scope.bathdata == "3"){
                $scope.bathing="Moderate Assist(Elder does 50% +)"
               }
               else if($scope.bathdata == "4"){
                $scope.bathing="Minimal Assist(Elder does 75% +)"
               }
               else if($scope.bathdata == "5"){
                $scope.bathing="Supervision only (Elder does 100%+)"
               }
               else if($scope.bathdata == "6"){
                $scope.bathing="Modified Independent (Using Device And No Helper)"
               }
               else if($scope.bathdata == "7"){
                $scope.bathing="(Complete Independent And No Helper)"
               }
        $scope.dressingdata=$scope.customerIdDetailsData[0].dressing_upper_body_asst_level;
          if($scope.dressingdata == "1"){
            $scope.dressup="Total Assist(Elder does less then 25%)"

          }
          else if($scope.dressingdata == "2"){
            $scope.dressup="Maximal Assist(Elder does 75%+)"
          }
          else if($scope.dressingdata == "3"){
            $scope.dressup="Moderate Assist(Elder does 50% +)"
          }
          else if($scope.dressingdata == "4"){
            $scope.dressup="Minimal Assist(Elder does 75% +)"
          }
          else if($scope.dressingdata == "5"){
            $scope.dressup="Supervision only (Elder does 100%+)"
          }
          else if($scope.dressingdata == "6"){
            $scope.dressup="Modified Independent (Using Device And No Helper)"
          }
          else if($scope.dressingdata == "7"){
            $scope.dressup="(Complete Independent And No Helper)"
          }
        $scope.dresslowdata=$scope.customerIdDetailsData[0].dressing_lower_body_asst_level;

            if($scope.dresslowdata == "1"){
              $scope.dresslow="Total Assist(Elder does less then 25%)"

            }
            else if($scope.dresslowdata == "2"){
              $scope.dresslow="Maximal Assist(Elder does 75%+)"
            }
            else if($scope.dresslowdata == "3"){
              $scope.dresslow="Moderate Assist(Elder does 50% +)"
            }
            else if($scope.dresslowdata == "4"){
              $scope.dresslow="Minimal Assist(Elder does 75% +)"
            }
            else if($scope.dresslowdata == "5"){
              $scope.dresslow="Supervision only (Elder does 100%+)"
            }
            else if($scope.dresslowdata == "6"){
              $scope.dresslow="Modified Independent (Using Device And No Helper)"
            }
            else if($scope.dresslowdata== "7"){
              $scope.dresslow="(Complete Independent And No Helper)"
            }

         $scope.toiletdata=$scope.customerIdDetailsData[0].toileting_asst_level;

         if( $scope.toiletdata == "1"){
          $scope.toileting="Total Assist(Elder does less then 25%)"

        }
        else if( $scope.toiletdata == "2"){
          $scope.toileting="Maximal Assist(Elder does 75%+)"
        }
        else if( $scope.toiletdata == "3"){
          $scope.toileting="Moderate Assist(Elder does 50% +)"
        }
        else if( $scope.toiletdata == "4"){
          $scope.toileting="Minimal Assist(Elder does 75% +)"
        }
        else if( $scope.toiletdata == "5"){
          $scope.toileting="Supervision only (Elder does 100%+)"
        }
        else if( $scope.toiletdata == "6"){
          $scope.toileting="Modified Independent (Using Device And No Helper)"
        }
        else if( $scope.toiletdata== "7"){
          $scope.toileting="(Complete Independent And No Helper)"
        }

        $scope.bladderdata=$scope.customerIdDetailsData[0].bladder_mgmt_asst_level;

          if( $scope.bladderdata == "1"){
            $scope.bladder="Total Assist(Elder does less then 25%)"

          }
          else if( $scope.bladderdata == "2"){
            $scope.bladder="Maximal Assist(Elder does 75%+)"
          }
          else if( $scope.bladderdata == "3"){
            $scope.bladder="Moderate Assist(Elder does 50% +)"
          }
          else if( $scope.bladderdata == "4"){
            $scope.bladder="Minimal Assist(Elder does 75% +)"
          }
          else if($scope.bladderdata == "5"){
            $scope.bladder="Supervision only (Elder does 100%+)"
          }
          else if( $scope.bladderdata == "6"){
            $scope.bladder="Modified Independent (Using Device And No Helper)"
          }
          else if( $scope.bladderdata== "7"){
            $scope.bladder="(Complete Independent And No Helper)"
          }

        $scope.boweldata=$scope.customerIdDetailsData[0].bowel_mgmt_asst_level;

        if( $scope.boweldata == "1"){
          $scope.bowel="Total Assist(Elder does less then 25%)"

        }
        else if( $scope.boweldata == "2"){
          $scope.bowel="Maximal Assist(Elder does 75%+)"
        }
        else if( $scope.boweldata == "3"){
          $scope.bowel="Moderate Assist(Elder does 50% +)"
        }
        else if( $scope.boweldata == "4"){
          $scope.bowel="Minimal Assist(Elder does 75% +)"
        }
        else if($scope.boweldata == "5"){
          $scope.bowel="Supervision only (Elder does 100%+)"
        }
        else if( $scope.boweldata == "6"){
          $scope.bowel="Modified Independent (Using Device And No Helper)"
        }
        else if( $scope.boweldata == "7"){
          $scope.bowel="(Complete Independent And No Helper)"
        }

      $scope.transferBeddata=$scope.customerIdDetailsData[0].transferrring_bed_asst_level;

    
      if( $scope.transferBeddata == "1"){
        $scope.transfering="Total Assist(Elder does less then 25%)"

      }
      else if($scope.transferBeddata == "2"){
        $scope.transfering="Maximal Assist(Elder does 75%+)"
      }
      else if($scope.transferBeddata == "3"){
        $scope.transfering="Moderate Assist(Elder does 50% +)"
      }
      else if( $scope.transferBeddata == "4"){
        $scope.transfering="Minimal Assist(Elder does 75% +)"
      }
      else if($scope.transferBeddata == "5"){
        $scope.transfering="Supervision only (Elder does 100%+)"
      }
      else if( $scope.transferBeddata == "6"){
        $scope.transfering="Modified Independent (Using Device And No Helper)"
      }
      else if( $scope.transferBeddata == "7"){
        $scope.transfering="(Complete Independent And No Helper)"
      }

      
      $scope.tranferTotoiletData=$scope.customerIdDetailsData[0].transferrring_toilet_asst_level;

       
      if( $scope.tranferTotoiletData == "1"){
        $scope.ToiletTransfering="Total Assist(Elder does less then 25%)"

      }
      else if($scope.tranferTotoiletData == "2"){
        $scope.ToiletTransfering="Maximal Assist(Elder does 75%+)"
      }
      else if($scope.tranferTotoiletData == "3"){
        $scope.ToiletTransfering="Moderate Assist(Elder does 50% +)"
      }
      else if( $scope.tranferTotoiletData == "4"){
        $scope.ToiletTransfering="Minimal Assist(Elder does 75% +)"
      }
      else if($scope.tranferTotoiletData == "5"){
        $scope.ToiletTransfering="Supervision only (Elder does 100%+)"
      }
      else if( $scope.tranferTotoiletData == "6"){
        $scope.ToiletTransfering="Modified Independent (Using Device And No Helper)"
      }
      else if( $scope.tranferTotoiletData == "7"){
        $scope.ToiletTransfering="(Complete Independent And No Helper)"
      }

      $scope.transferToShowerData=$scope.customerIdDetailsData[0].transferrring_shower_asst_level;

      if( $scope.transferToShowerData == "1"){
        $scope.showerTransfer="Total Assist(Elder does less then 25%)"

      }
      else if($scope.transferToShowerData == "2"){
        $scope.showerTransfer="Maximal Assist(Elder does 75%+)"
      }
      else if($scope.transferToShowerData == "3"){
        $scope.showerTransfer="Moderate Assist(Elder does 50% +)"
      }
      else if( $scope.transferToShowerData == "4"){
        $scope.showerTransfer="Minimal Assist(Elder does 75% +)"
      }
      else if($scope.transferToShowerData== "5"){
        $scope.showerTransfer="Supervision only (Elder does 100%+)"
      }
      else if($scope.transferToShowerData == "6"){
        $scope.showerTransfer="Modified Independent (Using Device And No Helper)"
      }
      else if( $scope.transferToShowerData == "7"){
        $scope.showerTransfer="(Complete Independent And No Helper)"
      }
    
    $scope.wheelchairData=$scope.customerIdDetailsData[0].walking_wheel_chair_asst_level;

    if( $scope.wheelchairData == "1"){
      $scope.wheelchair="Total Assist(Elder does less then 25%)"

    }
    else if($scope.wheelchairData == "2"){
      $scope.wheelchair="Maximal Assist(Elder does 75%+)"
    }
    else if($scope.wheelchairData == "3"){
      $scope.wheelchair="Moderate Assist(Elder does 50% +)"
    }
    else if( $scope.wheelchairData == "4"){
      $scope.wheelchair="Minimal Assist(Elder does 75% +)"
    }
    else if($scope.wheelchairData== "5"){
      $scope.wheelchair="Supervision only (Elder does 100%+)"
    }
    else if($scope.wheelchairData == "6"){
      $scope.wheelchair="Modified Independent (Using Device And No Helper)"
    }
    else if( $scope.wheelchairData == "7"){
      $scope.wheelchair="(Complete Independent And No Helper)"
    }

    $scope.stairsData=$scope.customerIdDetailsData[0].walking_stairs_asst_level;

    if( $scope.stairsData== "1"){
      $scope.stairsWalking="Total Assist(Elder does less then 25%)"

    }
    else if($scope.stairsData == "2"){
      $scope.stairsWalking="Maximal Assist(Elder does 75%+)"
    }
    else if($scope.stairsData == "3"){
      $scope.stairsWalking="Moderate Assist(Elder does 50% +)"
    }
    else if( $scope.stairsData == "4"){
      $scope.stairsWalking="Minimal Assist(Elder does 75% +)"
    }
    else if($scope.stairsData== "5"){
      $scope.stairsWalking="Supervision only (Elder does 100%+)"
    }
    else if($scope.stairsData == "6"){
      $scope.stairsWalking="Modified Independent (Using Device And No Helper)"
    }
    else if( $scope.stairsData == "7"){
      $scope.stairsWalking="(Complete Independent And No Helper)"
    }

    $scope.comprehensionData=$scope.customerIdDetailsData[0].comprehension_asst_level;

    if( $scope.comprehensionData== "1"){
      $scope.comprehension="Total Assist(Elder does less then 25%)"

    }
    else if($scope.comprehensionData == "2"){
      $scope.comprehension="Maximal Assist(Elder does 75%+)"
    }
    else if($scope.comprehensionData == "3"){
      $scope.comprehension="Moderate Assist(Elder does 50% +)"
    }
    else if( $scope.comprehensionData == "4"){
      $scope.comprehension="Minimal Assist(Elder does 75% +)"
    }
    else if($scope.comprehensionData== "5"){
      $scope.comprehension="Supervision only (Elder does 100%+)"
    }
    else if($scope.comprehensionData == "6"){
      $scope.comprehension="Modified Independent (Using Device And No Helper)"
    }
    else if( $scope.comprehensionData == "7"){
      $scope.comprehension="(Complete Independent And No Helper)"
    }
       

     
    $scope.expressiondata=$scope.customerIdDetailsData[0].expression_asst_level;

    if( $scope.expressiondata== "1"){
      $scope.expression="Total Assist(Elder does less then 25%)"

    }
    else if($scope.expressiondata == "2"){
      $scope.expression="Maximal Assist(Elder does 75%+)"
    }
    else if($scope.expressiondata == "3"){
      $scope.expression="Moderate Assist(Elder does 50% +)"
    }
    else if( $scope.expressiondata == "4"){
      $scope.expression="Minimal Assist(Elder does 75% +)"
    }
    else if($scope.expressiondata== "5"){
      $scope.expression="Supervision only (Elder does 100%+)"
    }
    else if($scope.expressiondata == "6"){
      $scope.expression="Modified Independent (Using Device And No Helper)"
    }
    else if( $scope.expressiondata == "7"){
      $scope.expression="(Complete Independent And No Helper)"
    }


    $scope.socialIntractionData=$scope.customerIdDetailsData[0].social_interaction_asst_level;

    if( $scope.socialIntractionData== "1"){
      $scope.socialIntraction="Total Assist(Elder does less then 25%)"

    }
    else if($scope.socialIntractionData == "2"){
      $scope.socialIntraction="Maximal Assist(Elder does 75%+)"
    }
    else if($scope.socialIntractionData == "3"){
      $scope.socialIntraction="Moderate Assist(Elder does 50% +)"
    }
    else if($scope.socialIntractionData == "4"){
      $scope.socialIntraction="Minimal Assist(Elder does 75% +)"
    }
    else if($scope.socialIntractionData== "5"){
      $scope.socialIntraction="Supervision only (Elder does 100%+)"
    }
    else if($scope.socialIntractionData == "6"){
      $scope.socialIntraction="Modified Independent (Using Device And No Helper)"
    }
    else if( $scope.socialIntractionData == "7"){
      $scope.socialIntraction="(Complete Independent And No Helper)"
    }


    $scope.problem_solvingData=$scope.customerIdDetailsData[0].problem_solving_asst_level;

    if( $scope.problem_solvingData== "1"){
      $scope.problem_solving="Total Assist(Elder does less then 25%)"

    }
    else if($scope.problem_solvingData == "2"){
      $scope.problem_solving="Maximal Assist(Elder does 75%+)"
    }
    else if($scope.problem_solvingData == "3"){
      $scope.problem_solving="Moderate Assist(Elder does 50% +)"
    }
    else if($scope.problem_solvingData== "4"){
      $scope.problem_solving="Minimal Assist(Elder does 75% +)"
    }
    else if($scope.problem_solvingData== "5"){
      $scope.problem_solving="Supervision only (Elder does 100%+)"
    }
    else if($scope.problem_solvingData == "6"){
      $scope.problem_solving="Modified Independent (Using Device And No Helper)"
    }
    else if( $scope.problem_solvingData == "7"){
      $scope.problem_solving="(Complete Independent And No Helper)"
    }


    $scope.memoryData=$scope.customerIdDetailsData[0].memory_asst_level;

    if( $scope.memoryData== "1"){
      $scope.memoryAsst="Total Assist(Elder does less then 25%)"

    }
    else if($scope.memoryData == "2"){
      $scope.memoryAsst="Maximal Assist(Elder does 75%+)"
    }
    else if($scope.memoryData == "3"){
      $scope.memoryAsst="Moderate Assist(Elder does 50% +)"
    }
    else if($scope.memoryData== "4"){
      $scope.memoryAsst="Minimal Assist(Elder does 75% +)"
    }
    else if($scope.memoryData== "5"){
      $scope.memoryAsst="Supervision only (Elder does 100%+)"
    }
    else if($scope.memoryData == "6"){
      $scope.memoryAsst="Modified Independent (Using Device And No Helper)"
    }
    else if( $scope.memoryData== "7"){
      $scope.memoryAsst="(Complete Independent And No Helper)"
    }


    $scope.presistenData= $scope.customerIdDetailsData[0].understand_verbal_content;

      if($scope.presistenData=="Usally understands with some cues and repetitions."){
          $scope.presistentwith="yes";
        } 
      else{
        $scope.presistentwith="No";
      }  
      if($scope.presistenData=="Rarely or never understands."){
        $scope.presistentrarely="yes";
      } 
    else{
      $scope.presistentrarely="No";
    }   
    if($scope.presistenData=="Understands clearly without cues or repetitions."){
      $scope.presistentWithout="yes";
    } 
  else{
    $scope.presistentWithout="No";
  }  

  if($scope.presistenData=="Sometime understands only basic conversation or simple,direct phrases need frequent cues"){
    $scope.presistentSometime="yes";
  } 
else{
  $scope.presistentSometime="No";
} 
  if($scope.presistenData=="Unable to access."){
    $scope.presistentUnableAccess="yes";
  } 
else{
  $scope.presistentUnableAccess="No";
} 

  }
     
    });

  };
  
 
    };

    addDataAdminController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addDataAdminController', addDataAdminController)
  })();