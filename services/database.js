const Datastore = require('nedb');
db = new Datastore({filename: './files/db.txt' , autoload: true});

module.exports.getTask = function (id, callback){
    db.findOne({_id: id}, callback);
};

module.exports.getAllTask = function (settings, callback){
    db.find({}, callback);
};

module.exports.save = function(task){
    if (task._id != null){
        db.update({_id: task._id}, task);
        console.log('updated entry');
    } else {
        db.insert(task);
        console.log('saved new entry');
    }
};



