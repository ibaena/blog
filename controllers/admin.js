var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var posts = require('../models/posts');



//ROUTES
router.get('/njs-admin', function(req, res) {
  mongoose.model('posts').find(function(err, post) {
    //console.log(test);
    res.render('admin', {
      layout: 'admin-layout',
      title: 'Penniless Developer - Dashboard',
      head: 'Dashboard',
      subhead: 'Whats on your mind?',
      newPost: post
    });
  });
});

router.post('/njs-admin', function(req, res) {
  var body = req.body;

  var newPosts = posts({
    author: body.author,
    title: body.title,
    subject: body.subject,
    body: body.body
  });

  newPosts.save(function(err, newPost) {
    if (err) return console.error(err);

    res.render('admin', {
      success: 'Successfully Posted!',
      layout: 'admin-layout',
      title: 'Penniless Developer - Dashboard',
      head: 'Dashboard',
      subhead: 'Whats on your mind?',
      post: newPost
    });
  });
});

router.post('/delete', function(req, res) {
  console.log(req.body);

  res.redirect('/njs-admin');
});

router.post('/update', function(req, res) {
  posts.findOneAndUpdate({
    _id: req.body.change_id
  }, {
    $set: {
      author: req.body.author,
      title: req.body.title,
      subject: req.body.subject,
      body: req.body.body,
    }
  }, {
    new: true
  }, function(err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }
    res.redirect('/njs-admin');
    console.log(doc);
  });
});

module.exports = router;
