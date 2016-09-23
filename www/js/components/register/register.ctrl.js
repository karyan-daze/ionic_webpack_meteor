import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { AccountsClient } from 'meteor/accounts-base';


// TODO: pass every functions to services
export default class RegisterCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.email="";
    this.password="";
    this.userCreateSuccess = -1;
  }
  createUser() {
    console.log("User :", Meteor.user());

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
    console.log("Acounts", Accounts);

    //Accounts.loginWithFacebook({loginStyle: "redirect"});
    Meteor.call("fbLogin", "0000", function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        Meteor.loginWithToken(result.token);
      }
    });
    if(cordova && CordovaFacebook) {
      CordovaFacebook.login({
        permissions:['user_events'],
          onSuccess: function(result) {
            if(result.declined.length > 0) {
              // Do something
              console.log("User has declined something");
            }
            else if(result.success == 1) {
              Meteor.call("fbLogin", result.userID, function(error, result){
                if(error){
                  console.log("error", error);
                }
                if(result){
                  Meteor.loginWithToken(result.token);
                }
              });
            }
          },
          onFailure: function(result) {
            if(result.cancelled) {
              console.log("user canceled the login");
            }
            else if("facebook login, Error :", result.errorLocalized);
          }
      });
    }

  }
};
