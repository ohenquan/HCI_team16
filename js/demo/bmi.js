/*global angular*/

var app = angular.module("tabPanel",[]);

app.controller("headerCtrl", function($scope){
  $scope.header = 'BMI Calculator + Metric';
  $scope.mySite = "Petrus Rex";
});

app.controller("tabCtrl",function($scope){
    $scope.tabSelected = "#awesome1";
    $scope.tabChange = function(e){
        if (e.target.nodeName === 'A') {
            $scope.tabSelected = e.target.getAttribute("href");
            e.preventDefault();
        }
    }
});

app.controller('imperialCtrl', function ($scope){
  $scope.statsUS = {
    weightUS: 0,
    ftUS: 0,
    convertFt: 0,
    inUS: 0,
    heightUS: 0,
    bmiUS: 0};
  
  var computeBmiUS = function(){
  //Convert feet to inches
   $scope.statsUS.convertFt = $scope.statsUS.ftUS * 12;
  //Add converted feet & remainder inches
   $scope.statsUS.heightUS = $scope.statsUS.convertFt + parseInt($scope.statsUS.inUS);
  //calculate BMI
    $scope.statsUS.bmiUS = ($scope.statsUS.weightUS * 703) /    ($scope.statsUS.heightUS * $scope.statsUS.heightUS) ;
  }
  //watch DOM input fields
  $scope.$watch('statsUS.weightUS', computeBmiUS);
  $scope.$watch('statsUS.ftUS', computeBmiUS);
  $scope.$watch('statsUS.inUS', computeBmiUS);
});

app.controller('metricCtrl', function($scope){
  //Let M = Metric
  $scope.statsM = {
    weightKG: 0,
    heightCM: 0,
    heightM: 0,
    bmiM: 0
  };
  
  var computeBmiM = function(){
   $scope.statsM.heightM = $scope.statsM.heightCM / 100;
    //calculate BMI
    $scope.statsM.bmiM = ($scope.statsM.weightKG) /    ($scope.statsM.heightM * $scope.statsM.heightM);
  };
   
  $scope.$watch('statsM.heightCM', computeBmiM);
  $scope.$watch('statsM.weightKG', computeBmiM);
});