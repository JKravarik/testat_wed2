const Datastore = require('nedb');
module.exports = new Datastore({filename: './files/db.txt' , autoload: true});

const doc = { finished: false
        , title: 'test1'
        , importance: 2
        , notes: 'blablabla'
        ,finishDate: new Date()
};


module.exports.listAllTasks = function (req, res){
    module.exports.find({}, function (err, docs){});
};

module.exports.insertNewTask = function (req, res){
    module.exports.insert(doc, function(err, newDoc){});
};

module.exports.listFinished = function (req, res){
    module.exports.find({}, function (err, docs){});
};

module.exports.save = function(task){
    if (task._id != null){
        module.exports.update({_id: task._id}, task);
        console.log('update');
    } else {
        module.exports.insert(task);
        console.log('something');
    }
};



//db.find({}).sort({finished: 1}).exec(function (err, docs){});

