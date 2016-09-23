// Ionic Starter App
import 'ionic.app.scss';

import 'meteor-client-side';
import 'accounts-base-client-side';
import 'accounts-password-client-side';

import {Mongo} from 'meteor/mongo';
import ngCordova from 'ng-cordova';
import router       from './app.router';
import ProfileModule from './components/profile';
import RegisterModule from './components/register';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
    'ionic',
    'ngCordova',
    ProfileModule.name,
    RegisterModule.name
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");
  let appId = 302618933427575;
  //$cordovaFacebookProvider.browserInit(appId);
})
.config(router);
