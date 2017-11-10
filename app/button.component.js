angular.module('app')

.component('spButton', {
  template: `
    <button class="button is-small {{ $ctrl.color }}" type="button" ng-click="$ctrl.onClick()">
      <span class="icon is-small" v-if="icon">
        <i class="fa {{ $ctrl.icon }}"></i>
      </span>
      <span ng-if="$ctrl.text">
        {{ $ctrl.text }}
      </span>
    </button>
  `,
  bindings: {
    text: '@',
    icon: '@',
    color: '@',
    onClick: '&',
  },
});
