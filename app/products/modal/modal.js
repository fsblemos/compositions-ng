angular.module('app.products.modal', [])

.controller('ProductModalController', function ($scope) {
  $scope.units = ['Centímetros', 'Kilogramas', 'Milímetros'];
  $scope.packaging = ['CAIXA', 'PACK', 'UNIDADE'];
  $scope.measures = [
    { title: 'Altura', value: null, unit: null },
    { title: 'Largura', value: null, unit: null },
    { title: 'Profundidade', value: null, unit: null },
    { title: 'Peso bruto', value: null, unit: null },
    { title: 'Peso líquido', value: null, unit: null },
  ];
});
