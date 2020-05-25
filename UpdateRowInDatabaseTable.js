const path = require("path");
const dbPath = path.resolve(__dirname, "count.db");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbPath);

// execute the table creation and row insertion SYNCHRONOUSLY by passing both instructions 
// to the serialize method (this part executes imperatively when this module is invoked)
db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS counts (key TEXT, value INTEGER)");
    db.run("INSERT INTO counts (key, value) VALUES(?, ?)", "counter", 0);
});

const express = require("express");
const counterapp = express();

// routing for GET - read data (one column from one row) from table and send back to client
counterapp.get("/data", function(req, res){
    db.get("SELECT value FROM counts", function(err, row){
        res.json({"count": row.value});
    });
});

// routing for POST - causes a hard-coded increment-by-one update to execute on the one-row table
counterapp.post("/data", function(req, res){
    db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function(err, row){
        if (err){
            console.error(err); // not much different from console.log() 
            res.status(500);
        } else {
            res.status(202);
        }
        res.end();
    });
});

counterapp.listen(5075);

console.log("Submit your GET or POST requests to http://localhost:5075/data");

