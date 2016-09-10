export default function($stateProvider) {
  $stateProvider
    .state('app.profile', {
      url: "/profile",
      views: {
        'profile-tab': {
          template: '<profile></profile>'
        }
      }
  });
};
