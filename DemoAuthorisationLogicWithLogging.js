/*

    AUTHORISATION: Is the current (authenticated) user authorised to use the resource they're requesting?

*/

const express = require("express");
const app = express();
const PORT = 3040;

const winston = require("winston");
const createLogger = winston.createLogger;
const format = winston.format;
const transports = winston.transports;

// createLogger takes a JSON object as its only arg (but it's a slightly complex JSON object)
const logger = createLogger({
    level: "debug",
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.File({filename: "app.log", timestamp: true})]
});

// "app.log" is the name we've chosen for our log file

// middleware function to check if the current is user authenticated
// N.B. this is a "test dependency" currently set to always return true
function isAuthenticated(req, res, next){

    let auth = false; // THIS IS THE HARD-CODED SIMULATION OF AN IMPLEMENTED AUTHENTICATION PROCESS

    // a middleware function normally calls next() so that the next function on the middleware stack is invoked
    if (auth){
        logger.log("info", "auth"); // log successful authentication
        return next();
    }
    // failed authentication
    logger.warn("not auth"); // log failed authentication
    res.redirect("/");
};


// the 2 routers follow: one for the root page, one for the secret page
// the secret page router inserts a call to the middleware isAuthenticated() function

app.get("/", function(req, res){
    res.send("This is a perfectly normal home page or similar.")
});

app.get("/secret", isAuthenticated, function(req, res){
    res.send("Pssst.... Here's the secret: 42!");
});

app.listen(PORT);


