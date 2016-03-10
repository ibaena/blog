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
  var body = req.body;
  var conditions = {
    _id: req.body.change
  };
  var update = {
    $set: {
      author: body.author,
      title: body.title,
      subject: body.subject,
      body: body.body
    }
  };
  var options = {
    upsert: true
  };
  posts.update(conditions, update, options, function(){
      res.redirect('njs-admin');
  });
});

module.exports = router;
