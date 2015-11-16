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
app.factory('searchFactory', ['$http', function($http) {
    return $http.post("/api", { tag: "chicken" });
}]);

// CONTROLLERS
app.controller('MainController', ['$scope', 'searchFactory', function ($scope, searchFactory) {

    $scope.submit = function () {

      searchFactory.then(function(response) {
        $scope.recipeData = JSON.parse(response.data);
      });
    };

}]);
