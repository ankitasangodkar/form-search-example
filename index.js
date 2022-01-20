var app = angular.module('myApp', []);

app.controller('AddUserController', function($scope) {
  $scope.message = 'Fill this out.';
  $scope.users = [];
  $scope.submit = function() {
    if ($scope.user.first && $scope.user.last &&                   
      $scope.user.age && $scope.user.email) {
      $scope.users.push($scope.user);
      $scope.user = '';
    }
  }
});

app.controller('RemoveUserController', function($scope) {
    $scope.remove = function(user) {
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);
    }
});


