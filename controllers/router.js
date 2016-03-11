var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var posts = require('../models/posts');
var news = require('../models/news');

//ROUTES
router.get('/', function(req, res) {
  mongoose.model('posts').find(function(err, post) {
    mongoose.model('news').find(function(err, news) {
      res.render('home', {
        layout: 'main',
        title: 'Penniless Developer',
        head: 'Penniless Developer',
        subhead: 'Where the Node Happens',
        news: news,
        posts: post
      });
    }).sort({date: -1}).limit(10);
  }).sort({date: -1});
});



router.get('/tutorials', function(req, res){
  res.render('tutorials',{
    layout:'main',
    title:'Penniless Developer - Tutorials',
    head:'Penniless Tutorials',
    subhead:'Free resources'
  });
});

router.get('/zen', function(req, res){
  res.render('zen',{
    layout:'main',
    title:'Penniless Developer - Zen',
    head:'Penniless Zen',
    subhead: 'Peace and Coding'
  });
});

module.exports = router;
