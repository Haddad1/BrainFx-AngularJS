angular.module('myApp', [])
    .controller('myCtrl', function($scope, $timeout, $http) {


    //First Page Start
     $scope.tasks = [
    {text:'Hope you like this'},         
    {text: "It's only a demo of what I can do"}
      ];
      
      $scope.numtasks = function () {
        return $scope.tasks.length;
      };
      
      
      $scope.addTask = function () {
        $scope.tasks.push({text:$scope.name});
        $scope.name = '';
      };
      
        $scope.remove = function(index){
          $scope.tasks.splice(index, 1)
        };  
    //First Page End

    //Second Page Start
      var timer; 
        $scope.secs = 0;
        $scope.mins = 0;
        $scope.hrs = 0;
        $scope.resetTimer = function(){
          $scope.secs = 0;
          $scope.mins = 0;
          $scope.hrs = 0;
        }
        $scope.stopTimer = function() {
            $timeout.cancel(timer);
            timer = null;
        };
        $scope.startTimer = function() {
            if (timer === null) {
                updateCounter();
            }
        };
        var updateCounter = function() {
            $scope.secs++;
            timer = $timeout(updateCounter, 1000);
            if(angular.equals($scope.secs, 60)){
              $scope.secs = 0;
              $scope.mins++;
            }
            if(angular.equals($scope.mins, 60)){
              $scope.mins = 0;
              $scope.hrs++;
            }
        };
        updateCounter();
    //Second Page End

    //Third Page Start
      $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function success(response) {
          $scope.httpreq = response.data;
        }, function error(response) {
          $scope.httpreq = response.statisText;
      });
    //Third Page End

    //Fourth Page Start
      $http.get("https://jsonplaceholder.typicode.com/photos")
        .then(function success(response) {
          $scope.httppics = response.data;
        }, function error(response) {
          $scope.httppics = response.statisText;
      });
    //Fourth Page End
         
          });