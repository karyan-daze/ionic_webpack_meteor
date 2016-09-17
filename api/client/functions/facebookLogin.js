import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


export default {
  facebook: {
    login() {
      console.log("Accounts fb", Accounts.loginWithFacebook);
      return Accounts.loginWithFacebook;
    }
  }
}
