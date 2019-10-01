var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb:https://186.105.160.88/32/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log("Database created!");
    db.close();
});