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
     console.log("accessToken : ", accessToken); 
     console.log("refreshToken : ", refreshToken); 
     console.log("profile : ", profile); 
     let user = new User({googleId: profile.id, displayName: profile.displayName}).save(()=>{
        console.log(user, "save from google");
      });
}));