// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('Cnnected to mongo server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo', err);
        }

        return console.log(JSON.stringify(result.ops, undefined, 2));
    }
    );

    // db.collection('Users').insertOne({
    //     //not recommanded
    //     //_id:123,
    //     name: 'Louis Patrick',
    //     age: 45,
    //     location: 'port-au-prince',
    //     completed: false 
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert user', err);
    //     }

    //     return console.log(JSON.stringify(result.ops, undefined, 2));
    // }
    // );

    db.close();
});