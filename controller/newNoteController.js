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
    let done = '';
    if(req.body.finishedState === ''){
        done = "checked";
    }
    db.save({
            title: req.body.title,
            description: req.body.description,
            until: req.body.until,
            importance: req.body.importance,
            finished: done,
            createDate: new Date().toISOString()
        }
    );
    res.redirect('/');
};

module.exports.updateTask = function(req, res, next){
    let done = '';
    if(req.body.finishedState === ''){
        done = "checked";
    }
    console.log("req.body.finished = ", done);
    db.update(req.params.id,{
            title : req.body.title,
            description: req.body.description,
            until: req.body.until,
            importance: req.body.importance,
            finished: done,
            createDate: new Date().toISOString()
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