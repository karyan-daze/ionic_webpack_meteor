import ProfileCtrl  from './profile.ctrl';
import routes       from './profile.routes';
import angularMeteor from 'angular-meteor';


const ProfileModule = angular.module('profile', [angularMeteor]);

angular.module('profile')
    .config(routes)
    .controller('ProfileCtrl', ProfileCtrl);

export default ProfileModule;
