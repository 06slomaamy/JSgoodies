/*
    SETUP STEPS:
    ===========
    Get an account at MongoDB Atlas at https://www.mongodb.com/cloud/atlas 
 

    Ideally, download and install the desktop GUI app, MongoDB Compass. 
    
    Use the website to connect to the provided cluster.
    
    ON THE MONGODB ATLAS WEBSITE:
    ----------------------------
    You access a project, a cluster, and click Connect. You then have a choice of 3 ways to connect, one of which is 
    via the Compass app.

    Choose "Connect using MongoDB Compass".

    
    ON THE DESKTOP USING COMPASS:
    ----------------------------    
    Use the Compass app to create (in one step) a database plus a collection in the cluster you're connected to.

    For connecting, you use the website dialogue to obtain a URL, which you copy into your clipboard and
    paste into your desktop Compass app, allowing you then to create the database/collection. (Obviously, take note of
    the names you've used for both database and collection, because you'll need them later.)


    ON THE MONGODB ATLAS WEBSITE:
    ----------------------------
    For the actual program we're writing here, which inserts a record into the collection, you also (obviously)
    need to connect to a URL from your JS code. We need to obtain a URL from the website again.

    From the website, go back to Connect, but this time choose "Connect your application" to get the URL (strictly,
    the URI) that you need. Again, we use copy-and-paste.

    The URL includes the characters "<password>", which you must replace with your MongoDB Atlas account password.
    
    This URL is enough to connect to the cluster, but you must still get hold of your particular database and collection,
    as shown in the code below.

*/

const mongoClient = require("mongodb").MongoClient;
const MONGO_URL = require("./MongoCredentialsManager").getMongoURL(); // My bespoke credentials manager module 

// url from MongoDB Atlas website: connect to cluster, choose connection method = "connect an application": you 
// then receive a URL to copy to clipboard and paste here. Replace <password> with actual password in the URL string.

// the URL (strictly a URI) connects to a cluster - we need to get hold of a database-plus-collection within that cluster
// in my example, the database is called notesdb, and the collection is called notes


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
