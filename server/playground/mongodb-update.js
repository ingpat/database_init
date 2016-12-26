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
    db.collection('Todos')
        .findOneAndUpdate({
            text: 'haiti'
        },{
            $set:{
                completed:true
            }
        },{
            returnOriginal:false
        }).then((result) => {
            console.log(result);
        });

   

    //db.close();
});