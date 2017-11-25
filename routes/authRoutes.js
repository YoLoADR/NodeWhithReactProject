const passport = require('passport');

module.exports = (app) => {
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
};
