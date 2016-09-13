import {Profiles} from 'api/collections';

export default class ProfileCtrl {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.helpers({
      profile: () => Profiles.find({})
    });
  }
}
