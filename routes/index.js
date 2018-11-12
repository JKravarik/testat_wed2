const db = require('../services/database.js');
const database_controller = require('../controller/dbController');
const index_controller = require('../controller/indexController');
const newNote_controller = require('../controller/newNoteController');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', index_controller.index);
router.get('/otherTheme', index_controller.otherTheme);
router.get('/newNote', newNote_controller.index);

module.exports = router;


