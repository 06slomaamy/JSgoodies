/*

    AUTHORISATION: Is the current (authenticated) user authorised to use the resource they're requesting?

*/

const express = require("express");
const app = express();
const PORT = 3030;

// middleware function to check if the current is user authenticated
// N.B. this is a "test dependency" currently set to always return true
function isAuthenticated(req, res, next){

    let auth = true; // THIS IS THE HARD-CODED SIMULATION OF AN IMPLEMENTED AUTHENTICATION PROCESS

    // a middleware function normally calls next() so that the next function on the middleware stack is invoked
    if (auth){
        return next();
    }
    // failed authentication: redirect to the root page, not the page requested
    res.redirect("/");
};


// the 2 routers follow: one for the root page, one for the secret page
// the secret page router inserts a call to the middleware isAuthenticated() function
// THIS IS THE PART THAT'S PERFORMING AUTHORISATION CHECKING
app.get("/", function(req, res){
    res.send("This is a perfectly normal home page or similar.")
});

app.get("/secret", isAuthenticated, function(req, res){
    res.send("Pssst.... Here's the secret: 42!");
});

app.listen(PORT);


