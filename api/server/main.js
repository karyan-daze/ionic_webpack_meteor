import { Meteor } from 'meteor/meteor';
import {Profiles} from './collections';

Meteor.startup(() => {
  if(Profiles.find().count()) return;

  Profiles.insert({
    userName: "Schrodinger"
  });
});
