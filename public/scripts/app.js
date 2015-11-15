var app = angular.module('recipeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'MainController'
  });

app.service('recipeService', function() {

  $scope.recipes = recipeService.recipes;

  $scope.$watch('recipes', function() {
    recipeService.recipes = $scope.recipes;
  });

});

app.controller('MainController', ['$scope', '$resource', 'recipeService', function ($scope, $resource, recipeService) {

  $scope.recipes = recipeService.recipes;

  $scope.recipeAPI = $resource("/api", { save: {method: 'POST'}, params: {tag: recipe} });

  $scope.recipeResult = $scope.recipeAPI.post({ q: $scope.recipes, });

}]);



}]); // end