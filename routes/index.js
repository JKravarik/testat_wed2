var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//document.getElementById('colorie').onclick = function () {
//    document.getElementById('theme').href = '/stylesheets/pink.css';
//};

module.exports = router;
