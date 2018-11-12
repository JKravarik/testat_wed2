const db = require('../services/database.js');

module.exports.index = function(req, res) {
    let db2 = db.listAllTasks(req, res);
    res.render('index', {
        title: 'Express',
        theme: '/stylesheets/style.css',
        theOtherSiteThemeWise: '/otherTheme',
        task: ['test1','test2', 'test3']
    });
};

module.exports.otherTheme = function (req, res) {
    res.render('index', {title: 'stillExpress', theme: '/stylesheets/pink.css', theOtherSiteThemeWise: '/'});
};






