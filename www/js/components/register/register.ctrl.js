import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

console.log("Meteor :", Meteor);
console.log("Accounts :", Accounts);

//console.log("Accounts :", Accounts);



export default class RegisterCtrl {
  constructor() {
    'ngInject';
    this.email="";
    this.password="";
  }
  createUser() {
    if(this.email && this.password) {
      let res = Accounts.createUser({
        email: this.email,
        password: this.password
      });
    } else {
      console.log("FAIL");
    }
  };
};
