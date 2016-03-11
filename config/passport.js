var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var users = require('../models/users');
var bcrypt = require('bcryptjs');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  users.findbyID(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local-signup', new LocalStrategy(
  function(email, password, done) {
      console.log('hey');
  }

));

module.exports = passport;
