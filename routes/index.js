var express = require('express');
var router = express.Router();
var passport = require("../config/passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("/index.html");
});

router.get('/auth/facebook',
    passport.authenticate('facebook', { scope: ['email','user_hometown','user_friends','user_gender','user_location'] })
);

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/',
        failureRedirect: '/' }));

module.exports = router;
