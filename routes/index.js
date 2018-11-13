const db = require('../services/database.js');
const index_controller = require('../controller/indexController');
const newNote_controller = require('../controller/newNoteController');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', index_controller.index);
router.get('/otherTheme', index_controller.otherTheme);
router.get('/newNote', newNote_controller.index);
router.post('/create', newNote_controller.createNewTask);
router.get('/editNote/:id', newNote_controller.editTask);
router.post('/save/:id', newNote_controller.updateTask);
router.get('/byFinishDate', index_controller.sortedByFinishDate);
router.get('/byImportance', index_controller.sortedByImportance);
router.get('/byCreatedDate',index_controller.sortedByCreateDate);
router.get('/byShowFinished',index_controller.sortedByFinished);

module.exports = router;

