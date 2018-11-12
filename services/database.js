const Datastore = require('nedb');
module.exports = new Datastore({filename: './files/db.txt' , autoload: true});

const doc = { finished: false
        , title: 'test1'
        , importance: 2
        , notes: 'blablabla'
        ,finishDate: new Date()
};


module.exports.getTask = function (id){
    module.exports.findOne({}, function(err,docs){});
    console.log('this is', module.exports.findOne({_id: id}, function (err, doc){}));
};

module.exports.sortBy = function (sortBy, sortDirection){
    return module.exports.findOne({}).sort({[sortBy]: sortDirection}).exec();
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



