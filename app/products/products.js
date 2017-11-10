angular.module('app.products', [
  'ngRoute',
  'app.products.modal',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/products/products.html',
    controller: 'ProductController',
  })
}])

.controller('ProductController', function ($scope) {
  $scope.showModal = false;
  $scope.compositions = [{
    title: 'Composição logística 1',
    flattedItems: [],
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
    flattedItems: [],
    items: [
      { dun: '111222333444555', pack: 'CAIXA', amount: 1 },
      { dun: '12345678', pack: 'PACK', amount: 1 },
      { dun: '789607130086', pack: 'UNIDADE', amount: 1 },
    ]
  }];

  const flatten = (items, level) => items.reduce((prev, cur) => {
    const item = prev.concat({ ...cur, level });
    return cur.children ? [...prev, ...item, ...flatten(cur.children, level + 1)] : item;
  }, []);

  $scope.compositions.forEach(composition => {
    composition.flattedItems = flatten(composition.items, 0);
  });

  $scope.getActions = (row) => {
    const defaultActions = ['insert', 'edit'];
    return row.children ? [...defaultActions, 'remove'] : defaultActions;
  };

  $scope.onUpdate = () => {
    $scope.showModal = true;
  };
});
