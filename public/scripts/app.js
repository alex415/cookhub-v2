var app = angular.module('recipeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'MainCtrl'
  });

app.service('recipeService', function() {

});

app.controller('MainCtrl', ['$scope', '$http', 'recipeService', function ($scope, $http, recipeService) {

}]);



}]); // end