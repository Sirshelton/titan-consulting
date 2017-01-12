'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('helloworld.html');
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

  router.get('/trains/data', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });                                                                           

  /* Your code here */
  router.get('/loginpage', function(req,res){
    return res.render('loginpage.html');
  });
  
   router.get('/profilepage.html', function(req,res){
    return res.render('profilepage.html');
  });
  return router
}();







