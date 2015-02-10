var goalsApp = angular.module("goalsApp", []);

var GoalsController = goalsApp.controller("GoalsListController", function($scope){
  $scope.goalModel = {title: "", urgency: ""}
  $scope.makeNewGoal = function(){
    $scope.newGoal = angular.copy($scope.goalModel)
  }

  $scope.saveNewGoal = function() {
    // send newGoal to DB
    $scope.goals.push($scope.newGoal)
    $scope.deleteNewGoal()
  }

  $scope.deleteNewGoal = function() {
    delete $scope.newGoal
  }

  $scope.goals = [{title: "sdfasdf"},{title: "sdfasdf"},{title: "sdfasdf"}];
})

GoalsController.directive('mistah305', function(){
  return {
    transclude: true, // Behave as a "frame" around provided content
    replace: true,
    templateUrl:"mistahworldwide.html"
  }
})
