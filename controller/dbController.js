const db = require('../services/database.js');



module.exports.list_finished = function(req, res){
    res.db.listAllTasks();
};