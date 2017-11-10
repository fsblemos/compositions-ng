angular.module('app', [
  'ngRoute',
  'app.products',
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({ redirectTo: '/' });
}]);
