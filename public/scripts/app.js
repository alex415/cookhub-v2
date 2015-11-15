var app = angular.module('recipeApp', ['ngRoute']);


// ROUTES
app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'MainController'
    });

}]);

// SERVICES

app.factory('searchFactory', ['$http', function ($http) {
    var obj = {};

    obj.fetchRecipes = function () {
      return $http.post("/api", { tag: "chicken" });
    };

    return obj;

}]);

// CONTROLLERS
app.controller('MainController', ['$scope', 'searchFactory', function ($scope, searchFactory) {

    $scope.submit = function () {

      searchFactory.fetchRecipes()
        .success(function(response) {
          $scope.recipeResults = response;
      });
    };

}]);