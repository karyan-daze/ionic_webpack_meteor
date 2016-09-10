export default function($stateProvider) {
  $stateProvider
    .state('app.register', {
      url: "/register",
      views: {
        'register-tab': {
          template: '<register></register>'
        }
      }
  });
};
