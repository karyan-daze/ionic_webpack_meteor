import RegisterCtrl from './register.ctrl';
import routes from './register.routes';
import angularMeteor from 'angular-meteor';
import angularMeteorAuth from 'angular-meteor-auth';
import template from './register.view.html';

const name = 'register';

export default angular.module(name, [
  angularMeteor, angularMeteorAuth
])
.config(routes)
.component(name, {
  template: template,
  controller: RegisterCtrl,
  controllerAs: name
});
