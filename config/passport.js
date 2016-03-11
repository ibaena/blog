var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var users = require('../models/users');
var mongoose = require('mongoose');

passport.use('local-signup', new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, username, password, cb) {
    users.findOne({
      'email': req.body.email
    }, function(err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      } else {
        var body = req.body;

        var newUser = users({
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          password: body.password
        });

        newUser.save(function(err, newUser) {
          if (err) return console.error(err);
        });
        return cb(null, user);
      }
    });
  }));

passport.use('local-login', new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, username, password, cb) {
    users.findOne({
      'email': req.body.email
    }, function(err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  users.find(_id, function(err, user) {
    done(err, user);
  });
});


module.exports = passport;
