import {Mongo} from 'meteor/mongo';

export const Profiles = new Mongo.Collection('profiles');

Profiles.allow({
  update(userId, profile, fields, modifier) {
    return userId && profile.owner === userId;
  }
})
