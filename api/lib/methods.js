import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Meteor.methods({

  fbLogin(fbId){
    let prefix = "_fb_";
    let user = Meteor.users.findOne({fbId:fbId});
    let userId;

    if(!user) {
      let userObject = {
        username: prefix+fbId,
        password: "password"+prefix,
        fbId: fbId
      };
      userId = Accounts.createUser(userObject);
    }
    else {
      userId = user._id;
    }
    let stampedLoginToken = Accounts._generateStampedLoginToken();
    Accounts._insertLoginToken(userId, stampedLoginToken);

    return stampedLoginToken;
  }
});
