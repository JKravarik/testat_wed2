const db = require('../services/database.js');


module.exports.index = function(req, res) {
    res.render('newNote', {
        title: 'Create new Note',
        task: {},
        saveTask: 'Create',
        create: '/create',
        theme: req.userSettings.style
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

module.exports.updateTask = function(req, res, next){
    console.log(req.params.id);
    const finished = req.body.finished === 'on';
    db.update(req.params.id,{
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
    db.getTask(req.params.id,function(docs){
        res.render('newNote', {
            title: 'TODO List',
            task: docs,
            saveTask: 'Save',
            create: '/save/'+req.params.id,
            theme: req.userSettings.style
        });
    });
};