const db = require('../services/database.js');


module.exports.index = function(req, res) {
    db.getAllTask(function(docs){
        res.render('index', {
            title: 'TODO List',
            theme: req.userSettings.style,
            theOtherSiteThemeWise: '/otherTheme',
            task: docs
        });
    });
};

module.exports.otherTheme = function (req, res) {
    if(req.userSettings.style === 'pink') {
        req.userSettings.style = 'style';
    } else {
        req.userSettings.style = 'pink';
    }
    res.redirect('/');
};

module.exports.sortedTasks = function (req, res) {
    req.userSettings.orderBy = "until: 'desc'";
    res.redirect('/');
};

module.exports.sortedIndex = function(req, res) {
    db.sortedTasks(function(docs){
        res.render('index', {
            title: 'TODO List',
            theme: req.userSettings.style,
            theOtherSiteThemeWise: '/otherTheme',
            task: docs
        });
    });
};

