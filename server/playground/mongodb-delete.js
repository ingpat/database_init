//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('Connected');
    //delete Many
    /*db.collection('Todos')
        .deleteMany({
            text: 'haiti'
        }).then((result) => {
            console.log(result);
        });*/

    //delete one
   /* db.collection('Todos')
        .deleteOne({
            text: 'haiti'
        }).then((result) => {
            console.log(result);
        });*/

    //find and delete one
    db.collection('Todos')
        .findOneAndDelete({
            completed: false
        }).then((result) => {
            console.log(result);
        });

    //db.close();
});