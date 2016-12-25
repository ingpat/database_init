//const MongoClient = require('mongodb').MongoClient;
 const {MongoClient,ObjectID} = require('mongodb');

 var obj = new ObjectID();

 console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('Cnnected to mongo server');


db.collection('Todos').find(
    //les accolades pour parametrer
   /* {
        _id:new ObjectID('585f1a5fb9639b19a8ed42c3')
        completed:'true'
    }*/
).toArray().then((docs)=>{
console.log('Todos');
 console.log(JSON.stringify(docs,undefined,2));
 
},(err)=>{
    console.log('unable to fetch todos',err);
});

//compter
db.collection('Todos').find().count().then((count)=>{
 console.log(`Todos count ${count}`);
},(err)=>{
    console.log('unable to fetch todos',err);
});


    //db.close();
});