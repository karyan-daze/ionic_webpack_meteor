import { Meteor } from 'meteor/meteor';
import {Profiles} from './collections';

Meteor.startup(() => {

  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });

  // pass data in setting
  ServiceConfiguration.configurations.insert({
    service "facebook",
    appId: "302618933427575",
    secret: "70eba441307a4297386cbdaf47bc7b03",
    loginStyle: "redirect"
  });

  if(Profiles.find().count()) return;

  Profiles.insert({
    userName: "Schrodinger"
  });
});
