var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;
var models = require('../models');
passport.use(new FacebookStrategy({
        clientID: '173105820046468',
        clientSecret: 'c39b5af000a187b5ea9ebed20b0c52a5',
        callbackURL: "https://thawing-ravine-87510.herokuapp.com/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
/*        models.User.findOrCreate(profile.email, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
        });*/
    }
));

module.exports = passport;