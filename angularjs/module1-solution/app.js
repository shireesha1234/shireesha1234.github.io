(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope','$filter'];
function LunchCheckController($scope,$filter){
  $scope.msg1 = "";
  $scope.listbox = "";
  $scope.wordcount=0;
  $scope.CountItems = function() {
    var str = $scope.listbox;
    if (str.length == 0) {
        $scope.msg1 = "Please Enter Data First";
    } else {
    $scope.wordcount = str.split(",").length;
    if ($scope.wordcount <=3) {
      $scope.msg1 = "Enjoy!";
  }  else {
   $scope.msg1 = "Too Much";
   }
 }
  };

}

})();
