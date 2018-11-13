const db = require('../services/database.js');

module.exports.index = function(req, res) {
    db.getAllTask(function(docs){
        res.render('index', {
            title: 'TODO List',
            theme: '/stylesheets/style.css',
            theOtherSiteThemeWise: '/otherTheme',
            task: docs
        });
    });
};

module.exports.otherTheme = function (req, res) {
    db.getAllTask(function(docs){
        res.render('index', {
            title: 'TODO List',
            theme: '/stylesheets/pink.css',
            theOtherSiteThemeWise: '/',
            task: docs
        });
    });
};

module.exports.list_finished = function(req, res){
    res.db.listFinished();
};







