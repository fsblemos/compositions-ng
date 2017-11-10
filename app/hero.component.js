angular.module('app')

.component('spHero', {
  template: `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $ctrl.title }}</h1>
          <h2 class="subtitle">{{ $ctrl.subtitle }}</h2>
        </div>
      </div>
    </section>
  `,
  bindings: {
    title: '@',
    subtitle: '@',
  },
});
