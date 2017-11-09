angular.module('app.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/products/products.html',
    controller: 'ProductController',
  })
}])

.controller('ProductController', [function() {
  const self = this;

  self.compositions = [{
    title: 'Composição logística 1',
    items: [{
      dun: '111222333444555',
      pack: 'CAIXA',
      amount: 1,
      children: [
        { dun: '12345678', pack: 'PACK', amount: 1 },
        {
          dun: '789607130086',
          pack: 'UNIDADE',
          amount: 1,
          children: [
            { dun: '789607130086', pack: 'UNIDADE', amount: 1 },
            { dun: '789607130086', pack: 'UNIDADE', amount: 1 },
          ]
        },
      ],
    }],
  }, {
    title: 'Composição logística 2',
    items: [
      { dun: '111222333444555', pack: 'CAIXA', amount: 1 },
      { dun: '12345678', pack: 'PACK', amount: 1 },
      { dun: '789607130086', pack: 'UNIDADE', amount: 1 },
    ]
  }];
}]);
