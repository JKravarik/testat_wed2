const db = require('../services/database.js');

module.exports.index = function(req, res) {
    res.render('index', { title: 'Express', theme: '/stylesheets/style.css', theOtherSiteThemeWise: '/otherTheme'});
};

module.exports.otherTheme = function (req, res) {
    res.render('index', {title: 'stillExpress', theme: '/stylesheets/pink.css', theOtherSiteThemeWise: '/'});
};



