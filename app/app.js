angular.module('app', [
  'ngRoute',
  'app.products',
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(false);

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});

  // $routeProvider.
  // 	when('/', {
  //     templateUrl: 'products/products.html',
  //     controller: 'ProductController',
  //     controllerAs: 'product'
  //   })
  //   .otherwise({
  //     redirectTo: '/'
  //   });
}]);
