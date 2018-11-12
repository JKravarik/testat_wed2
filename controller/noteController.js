const database = require('../services/database');

const noteController = {
    getNewNote(req, res, next) {
        res.render('note-form', {
            title: 'Create new note',
            note: {},
            saveText: 'Create'
        });
    },

    postNewNote(req, res, next) {

    }
}

module.exports = noteController;