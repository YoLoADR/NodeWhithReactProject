const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken)=>{ console.log(accessToken); }));

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }) 
);

app.get(
    '/auth/google/callback',
    (req, res)=>{ 
        passport.authenticate('google');
        res.send({'hi': req.body}) }
);

// env Production for Heroku 
const PORT = process.env.PORT || 5003;
app.listen(PORT);