const Datastore = require('nedb');
db = new Datastore({filename: './files/db.txt' , autoload: true});

module.exports.getTask = function (id, callback){
    db.findOne({_id: id}, function(err, doc){
        callback(doc);
    });
};


module.exports.sortedTasks = function (req, callback){
    db.find({}).sort({[req.userSettings.orderBy]: req.userSettings.orderDirection }).exec(function(err, docs){
        callback(docs);
    });
};

module.exports.save = function(task){
    db.insert(task);
    console.log('saved new entry');
};

module.exports.update = function(id, task){
    db.update({_id: id}, task);
    console.log('updated entry');
};





