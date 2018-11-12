const db = require('../services/database.js');
const express = require('express');
const router = express.Router();

const indexController = require('/controller/indexController');
const noteController = require('/controller/noteController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', theme: '/stylesheets/style.css', theOtherSiteThemeWise: '/otherTheme'});
});

router.get('/', indexController);
router.get('/newNote/', noteController.getNewNote);
router.post('/newNote/', noteController.postNewNote);

/* Change the theme, at least in theorie*/
router.get('/otherTheme', function(req, res, next) {
  res.render('index', {title: 'stillExpress', theme: '/stylesheets/pink.css', theOtherSiteThemeWise: '/'});
});

router.get('/newNote', function(req, res){
  res.render('newNote', {title: 'newNote'});
});


module.exports = router;

