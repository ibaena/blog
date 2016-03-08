var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//ROUTES
router.get('/njs-admin', function(req, res){
  res.render('admin',{
    layout:'admin-layout',
    title:'Penniless Developer - Dashboard',
    head:'Dashboard',
    subhead:'Whats on your mind?'
  });
});

router.post('/njs-admin', function(req, res){
    console.log(req.body);
    res.render('admin',{
      success:'Successfully Posted!',
      layout:'admin-layout',
      title:'Penniless Developer - Dashboard',
      head:'Dashboard',
      subhead:'Whats on your mind?'
    });
});

module.exports = router;
