angular.module('app')

.component('spInput', {
  template: `
    <div class="field is-horizontal" style="margin-bottom: 10px;">
      <div class="field-label is-small">
        <label class="label">{{ $ctrl.title }}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-small" type="text" placeholder="{{ $ctrl.title }}">
          </p>
        </div>
      </div>
    </div>
  `,
  replace: true,
  bindings: {
    title: '@',
  },
});
