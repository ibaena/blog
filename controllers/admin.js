var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//ROUTES
router.get('/njs-admin', function(req, res){
  res.render('admin',{
    layout:'main',
    title:'Penniless Developer',
    head:'Penniless Developer',
    subhead:'Where the Node Happens'
  });
});

module.exports = router;
