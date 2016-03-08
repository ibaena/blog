var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//ROUTES
router.get('/', function(req, res){
  res.render('home',{
    layout:'main',
    title:'Penniless Developer',
    head:'Penniless Developer',
    subhead:'Where the Node Happens'
  });
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
