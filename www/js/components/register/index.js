import RegisterCtrl from './register.ctrl';
import routes from './register.routes';
import angularMeteor from 'angular-meteor';
import template from './register.view.html';

const name = 'register';

export default angular.module(name, [
  angularMeteor, 'angular-meteor.auth'
])
.config(routes)
.component(name, {
  template: template,
  controller: RegisterCtrl,
  controllerAs: name
});
