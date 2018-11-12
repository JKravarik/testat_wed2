const Datastore = require('nedb');
module.exports = new Datastore({filename: '../files/db.txt' , autoload: true});

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



//db.find({}).sort({finished: 1}).exec(function (err, docs){});

