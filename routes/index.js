const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', theme: '/stylesheets/style.css', theOtherSiteThemeWise: '/otherTheme'});
});

/* Change the theme, at least in theorie*/
router.get('/otherTheme', function(req, res, next) {
  res.render('index', {title: 'stillExpress', theme: '/stylesheets/pink.css', theOtherSiteThemeWise: '/'});
});

/* GoTo new Note Form*/
router.get("/newNote/", function(req, res, next) {
    res.render()
}

var Datastore = require('nedb');
var db = new Datastore({ filename: 'files/db.txt', autoload: true});

db.loadDatabase(function(err){

});


module.exports = router;


