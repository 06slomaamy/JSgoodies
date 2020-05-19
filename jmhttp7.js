console.log("Welcome to the basic server, ready to give you some lovely HTML...");

const server = require("http").createServer();
const PORT = process.env.PORT || 5006;

const fileReader = require("fs");
const urlModule = require("url");

// perform ROUTING... the incoming URL in the request can have several possible values: 
// use that value to decide what to return to the client

/* this is what the HTML looks like on the index page:
        <form action="processInfo" method="get">
            <p>Enter your name: <input type="text" name="prospectName" /></p>
            <p>Enter your e-mail address: <input type="email" name="prospectEmail" /></p>
            <p><input type="submit" value="Submit your details" /></p>
        </form>

  When the user enters data and clicks the submit button, the request URL looks like this,
  containing 2 query parameters (params):

  http://localhost:5006/processInfo?prospectName=Tony+Stark&prospectEmail=tony%40stark-industries.com

    The "normal" part of the URL has been appended with a slash, then the action attribute value
    of the form, then a question mark, then a name=value pair, an ampersand, and the second 
    param name=value pair.

    This request is processed by this program.

    The blank in "Tony Stark" has been replaced by a + sign.
    The @ in the email address has been replaced by %40


*/




server.on("request", function(request, response){

    const currentFolder = __dirname + "/simple-site-with-form/";

    // media type... alternatives include: text/html, text/xml, image/jpeg, audio/mpeg, application/json
    response.setHeader("content-type", "text/html");
    console.log("Request url is " + request.url);

    let fileName = null;
    if (request.url === "/"){
        fileName = currentFolder + "index.html";
    } else if (request.url === "/about"){
        fileName = currentFolder + "about.html";
    } else if (request.url.substr(0, 12) === "/processInfo"){
        fileName = currentFolder + "success.html";
        // the user entered the name and email address on the form, received here as query params
        // we're making use of the imported url module, 
        const {query} = urlModule.parse(request.url, true);
        console.log("we have a prospect!");
        if (query.prospectName) {
            console.log("Prospect's name is " + query.prospectName);
        }
        if (query.prospectEmail) {
            console.log("Prospect's email address is " + query.prospectEmail);
        }
    } else {
        fileName = currentFolder + "error.html";
        request.statusCode = 404;
    };
    fileReader.readFile(fileName, function(error, dataFromFile){
        if (!error){
            // media type... alternatives include: text/html, text/xml, image/jpeg, audio/mpeg, application/json
            response.setHeader("content-type", "text/html"); 
            // send the html file
            response.end(dataFromFile);
        } else {
            console.log("ERROR PROCESSING...");
            console.log("file name is " + fileName);
        }
    });

});


// use the server's listen() method to start it listening for incoming HTTP requests
server.listen(PORT, function(){
    console.log("Listening for requests on port " + PORT);
});
