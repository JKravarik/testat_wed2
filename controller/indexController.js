const db = require('../services/database.js');
const uP = require('../routes/sessionUserPreferences.js');

module.exports.index = function(req, res) {
    console.log(req.session);
    db.getAllTask(function(docs){
        res.render('index', {
            title: 'TODO List',
            theme: 'style',
            theOtherSiteThemeWise: '/otherTheme',
            task: docs
        });
    });
};

module.exports.otherTheme = function (req, res) {
    db.getAllTask(function(docs){
        res.render('index', {
            title: 'TODO List',
            theme: 'pink',
            theOtherSiteThemeWise: '/',
            task: docs
        });
    });
};









