var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var posts = require('../models/posts');



//ROUTES
router.get('/njs-admin', function(req, res) {
  mongoose.model('posts').find(function(err, test) {
    //console.log(test);
    res.render('admin', {
      layout: 'admin-layout',
      title: 'Penniless Developer - Dashboard',
      head: 'Dashboard',
      subhead: 'Whats on your mind?'
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
    console.log(newPost);

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

module.exports = router;
