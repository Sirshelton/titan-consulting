'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('helloworld.html');
  });

router.get('/omar', function(req,res){
    return res.render('omar.html');
  });


  router.get('/trains', function(req,res){
    return res.render('trains.html');
  });
   
   router.get('/charlie', function(req,res){
    return res.render('charlie.html');
  });
  
  router.get('/C2.html', function(req,res){
    return res.render('C2.html');
  });

  /*router.get('/trains/data', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
<<<<<<< HEAD
  });*/
=======
  });                                                                           
>>>>>>> 4b4d0fb9a95c9b2914f1c38f441b88d2eb766e44

  /* Your code here */
  router.get('/loginpage', function(req,res){
    return res.render('loginpage.html');
  });
  
  return router
}();
