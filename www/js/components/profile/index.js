import ProfileCtrl  from './profile.ctrl';
import routes       from './profile.routes';
import angularMeteor from 'angular-meteor';
import template from './profile.view.html';

const name = 'profile';
export default angular.module(name, [
  angularMeteor
])
.config(routes)
.component(name, {
  template: template,
  controller: ProfileCtrl,
  controllerAs: name
});
