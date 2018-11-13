const db = require('../services/database.js');

module.exports.index = function(req, res) {
    let database = db.getAllTask();
    console.log(database);
    res.render('index', {
        title: 'TODO List',
        theme: '/stylesheets/style.css',
        theOtherSiteThemeWise: '/otherTheme',
        task: ["test1"]
    });
};

module.exports.otherTheme = function (req, res) {
    res.render('index', {title: 'TODO List', theme: '/stylesheets/pink.css', theOtherSiteThemeWise: '/'});
};

module.exports.list_finished = function(req, res){
    res.db.listFinished();
};





