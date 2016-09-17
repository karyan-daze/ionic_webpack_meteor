import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Meteor.methods({
  fbLogin(obj){
    return Accounts.loginWithFacebook({loginStyle: "redirect"});
  }
});
