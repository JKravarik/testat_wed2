const db = require('../services/database.js');

module.exports.index = function(req, res) {
    let database = db.getTask('gRiP096IyFkA92MH');
    console.log(database);
    res.render('index', {
        title: 'Express',
        theme: '/stylesheets/style.css',
        theOtherSiteThemeWise: '/otherTheme',
        task: database
    });
};

module.exports.otherTheme = function (req, res) {
    res.render('index', {title: 'stillExpress', theme: '/stylesheets/pink.css', theOtherSiteThemeWise: '/'});
};

module.exports.list_finished = function(req, res){
    res.db.listFinished();
};





