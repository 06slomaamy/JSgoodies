/*
    SETUP STEPS:
    ===========
    Get an account at MongoDB Atlas at https://www.mongodb.com/cloud/atlas  

    Ideally, download and install the desktop GUI app, MongoDB Compass. 
    
    Use the website to connect to the provided cluster, and create a database-plus-collection (database and collection
    are created in one step).

    Use the Compass app to connect and obtain a URL, which you copy to your clipboard and then paste into 
    the JavaScript code below. The URL includes the characters "<password>", which you must replace with your MongoDB Atlas 
    account password.
    
    (In the code below, I import (require) a separate module, not uploaded to GitHub, to obtain credentials for my own 
    Mongo cluster. For purposes of the lab, you can just hard-code a literal string value for the MONGO_URL constant.) 
    
    This URL is enough to connect to the cluster, but you must still get hold of your particular database and collection,
    as shown in the code below.

*/

const mongoClient = require("mongodb").MongoClient;
const MONGO_URL = require("./MongoCredentialsManager").getMongoURL(); // My bespoke credentials manager module 

// url from MongoDB Atlas website: connect to cluster, choose connection method = "connect an application": you 
// then receive a URL to copy to clipboard and paste here. Replace <password> with actual password in the URL string.

// the URL (strictly a URI) connects to a cluster - we need to get hold of a database-plus-collection within that cluster
// in my example, the database is called "notesdb", and the collection is called "notes"


mongoClient.connect(MONGO_URL, function(error, databaseHandler){
    if (error){
        return console.log(error);
    }
    const databaseObject = databaseHandler.db("notesdb");
    try {
        databaseObject.collection("notes").insertOne({author: "Frank Herbert", title: "Dune"});
    } finally {
        databaseHandler.close();
    }

});
