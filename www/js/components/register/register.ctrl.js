import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import {fbLogin} from 'meteorCLient/facebookLogin';

export default class RegisterCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.email="";
    this.password="";
    this.userCreateSuccess = -1;
  }
  createUser() {
    if(this.email && this.password) {
      let res = Accounts.createUser({
        email: this.email,
        password: this.password
      }, this.$bindToContext((err)=> {
        if(!err)
          this.userCreateSuccess = true;
        else {
          console.log("err", err);
          this.userCreateSuccess = false;
        }
      }));
    } else {
      this.userCreateSuccess = -2;
      console.log("FAIL");
    }
  };
  logout() {
    Meteor.logout(() => {
      this.userCreateSuccess = -1;
      console.log("user is Logged out");
    });
  };
  facebookSignIn() {
    console.log("clicked");
    console.log("user :", Meteor.user());
    console.log("fbLogin ?", fbLogin);

    let something  = fbLogin();
    /*Meteor.call("fbLogin", function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
         console.log("success :", result);
      }
    });*/
    //Accounts.loginWithFacebook({loginStyle: "redirect"});
    /*CordovaFacebook.login({
      permissions:['user_events'],
        onSuccess: function(result) {
          if(result.declined.length > 0) {
            // Do something
            console.log("User has declined something");
          }
          console.log("success :",result);
        },
        onFailure: function(result) {
          if(result.cancelled) {
            console.log("user canceled the login");
          }
          else if("facebook login, Error :", result.errorLocalized);
        }
    });*/
  }
};
