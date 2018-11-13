const Datastore = require('nedb');
db = new Datastore({filename: './files/db.txt' , autoload: true});

module.exports.getTask = function (id, callback){
    setTimeout(
        () => {
            db.findOne({_id: id}, function(err, doc){
                callback(doc);
            });

        },
        Math.floor(Math.random() *100) +1
    )
};

module.exports.getAllTask = function (callback){
    setTimeout(
        () => {
            db.find({}, function(err, docs){
                callback(docs);
            });

        },
        Math.floor(Math.random() *100) +1
    )
};


module.exports.sortedTasks = function (callback){
    console.log("text:", req.userSettings.OrderBy)
    setTimeout(
        () => {
            db.find({}).sort({until: 'desc'}).exec(function(err, docs){
                callback(docs);
            });
        },
        Math.floor(Math.random() *100) +1
    )
};

module.exports.save = function(task){
        db.insert(task);
        console.log('saved new entry');
};

module.exports.update = function(id, task){
    db.update({_id: id}, task);
    console.log('updated entry');
};





