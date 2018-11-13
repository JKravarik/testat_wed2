const db = require('../services/database.js');


module.exports.index = function(req, res) {
    res.render('newNote', {
        title: 'newNote',
        task: {},
        saveTask: 'Create'
    });
};

module.exports.createNewTask = function(req, res, next){
    const finished = req.body.finished === 'on';
    db.save({
        title : req.body.title,
        description: req.body.description,
        until: req.body.until,
        importance: req.body.importance,
        finished: finished
        }
    );
    res.redirect('/');
};

module.exports.editTask = function (req, res, next) {
    res.render('newNote', {
        title: 'edit Note',
        task: {},
        saveTask: 'Save'
    });

}

