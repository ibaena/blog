var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var users = require('../models/users');
var passport = require('../config/passport');


//REGISTER LANDING
router.get('/register', function(req, res) {
  res.render('register', {
    layout: 'admin-layout',
    title: 'Penniless Developer - Dashboard',
    head: 'Register',
    subhead: 'Lets Get Started',
  });
});

//CREATE NEW ACCOUNTS -FEATURE
router.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/login',
  failureRedirect: '/register',
  failureFlash: true
}));

//LOGIN LANDING
router.get('/login', function(req, res) {
  res.render('login', {
    layout: 'admin-layout',
    title: 'Penniless Developer - Dashboard',
    head: 'Register',
    subhead: 'Lets Get Started',
  });
});

//LOGIN POST
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/njs-admin',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
