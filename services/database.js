import datastore from 'nedb-promise'

let DB = datastore ({
    filename: '../files/db.txt',
    autoload: true
})

async function doDatabaseStuff() {

    await DB.insert([{
        num: 1, alpha: 'a'
    }, {
        num: 2, alpha: 'b'
    }])

    let document = await DB.findOne({num:1})

    let documents = await DB.cfind({})
        . projection({num: 1, _id: 0})
        .exec()
}

doDatabaseStuff()
