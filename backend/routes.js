'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');
var multer  = require('multer');
var upload = multer({ dest: 'frontend/images/' });

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
  
  router.get('/challengewall', function(req,res){
    return res.render('challengewall.html');
  });
  
  router.get('/createchallenge.html', function(req,res){
    return res.render('createchallenge.html');
  });
  
  
  router.get('/semaj', function(req,res){
    return res.render('semaj.html');
  });
  
  router.get('/loginpage', function(req,res){
    return res.render('loginpage.html');
  });
  
<<<<<<< HEAD
  router.get('/loading2', function(req,res){
    return res.render('loading2.html');
  });
  
  router.post('/image/upload', upload.single('image'), function (req, res){
    var filename = req.file.filename
    console.log("Hello Omar!");
    console.log('File was uploaded: ' + filename);
    return res.send("<html><img src='/images/" + filename + "'/></html>")
  }); 
=======
  router.get('/profilepage', function(req,res){
    return res.render('/loginpage/profilepage.html');
  });
  
>>>>>>> 61c46a21ceb396130ba6016a26ed4f2d0732f25d
  /*

  router.get('/trains/data', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });

  });*/

<<<<<<< HEAD
  /* Your code here */
  
 
 
  return router
  
}();







=======
    /* Your code here*/ 
      return router

<<<<<<< HEAD
  }();
  
=======
  }();
>>>>>>> d4e1b1f976fbf4b148a0fab5762b6a1067df8076
>>>>>>> 70783ec96ce2eb5788278182566ec50c38c662a1
