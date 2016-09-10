import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

console.log("Meteor :", Meteor);
//console.log("Accounts :", Accounts);



export default class RegisterCtrl {
  constructor() {
    'ngInject';
    this.email="";
    this.password="";
  }
  createUser() {
    console.log("clicked !");

    console.log("email :", this.email);
    console.log("password :", this.password);

    if(this.email && this.password) {
      let res = Accounts.createUser({
        email: this.email,
        password: password
      });

      console.log("res :", res);

    } else {
      console.log("FAIL");
    }
  };
};
