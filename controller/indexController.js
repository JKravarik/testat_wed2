const db = require('../services/database.js');


module.exports.index = function(req, res) {
    db.sortedTasks(req, function(docs){
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

module.exports.sortedByFinishDate = function (req, res) {
    if(req.userSettings.orderDirection === '1') {
        res.redirect('/?orderBy=until&orderDirection=-1');
    } else {
        res.redirect('/?orderBy=until&orderDirection=1');
    }
};

module.exports.sortedByImportance = function (req, res) {
    if(req.userSettings.orderDirection === '1') {
        res.redirect('/?orderBy=importance&orderDirection=-1');
    } else {
        res.redirect('/?orderBy=importance&orderDirection=1');
    }

};

module.exports.sortedByCreateDate = function (req, res) {
    if(req.userSettings.orderDirection === '1') {
        res.redirect('/?orderBy=createDate&orderDirection=-1');
    } else {
        res.redirect('/?orderBy=createDate&orderDirection=1');
    }
};

module.exports.sortedByFinished = function (req, res) {
    if(req.userSettings.orderDirection === '1') {
        res.redirect('/?orderBy=finished&orderDirection=-1');
    } else {
        res.redirect('/?orderBy=finished&orderDirection=1');
    }
};

module.exports.sortedIndex = function(req, res) {
    console.log(req.userSettings.style);
    db.sortedTasks(function(docs){
        res.render('index', {
            title: 'TODO List',
            theme: req.userSettings.style,
            theOtherSiteThemeWise: '/otherTheme',
            task: docs
        });
    });
};

