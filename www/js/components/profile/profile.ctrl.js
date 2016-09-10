import {Profiles} from 'api/collections';

class ProfileCtrl {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.helpers({
      profile: () => Profiles.find({})
    });
  }
}

export default ProfileCtrl;
