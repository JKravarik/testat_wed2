const db = require('../services/database.js');
const hbs = require('hbs');


module.exports.index = function(req, res) {
    db.sortedTasks(req, function(docs){
        console.log("showFinished = ",req.userSettings.showFinished);
        res.render('index', {
            title: 'TODO List',
            theme: req.userSettings.style,
            theOtherSiteThemeWise: '/otherTheme',
            showfinished: req.userSettings.showFinished,
            task: docs
        });
    });
};

module.exports.otherTheme = function (req, res) {
    if(req.userSettings.style === 'pink') {
        res.redirect('/?style=style');
    } else {
        res.redirect('/?style=pink');
    }
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

module.exports.showFinished = function (req, res) {
    console.log(req.userSettings.showFinished);
    if(req.userSettings.showFinished === "1") {
        res.redirect('/?showFinished=0');
    } else {
        res.redirect('/?showFinished=1');
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


