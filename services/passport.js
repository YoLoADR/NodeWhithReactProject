const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('user');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) =>{
     
      User.findOne({googleId: profile.id})
      .then((existingUser)=>{
        if(existingUser){
          //User already exist
          done(null, existingUser);
        }else{
          // User doesn't exist, we can creat this one
          let user = new User({googleId: profile.id, displayName: profile.displayName}).save((data)=>{
            // Informed to passport method that it is finish
            done(null, data);
          });
        }
      });
}));