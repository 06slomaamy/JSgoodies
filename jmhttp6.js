console.log("Welcome to the basic server, ready to give you some lovely HTML...");

const server = require("http").createServer();
const PORT = process.env.PORT || 5005;

const fileReader = require("fs");

/* 
    very basic server - what's missing:
        1) error handling other than logging to console
        2) sends back ONLY static HTML (e.g. if a page contained an <img>, we wouldn't include the actual image, just a 
        a broken link)... to fix this, we need to require("node-static")
        
*/


// perform ROUTING... the incoming URL in the request can have several possible values: 
// use that value to decide what to return to the client

server.on("request", function(request, response){

    const currentFolder = __dirname + "/simple-site/";

    // media type... alternatives include: text/html, text/xml, image/jpeg, audio/mpeg, application/json
    response.setHeader("content-type", "text/html");

    let fileName = null;
    switch (request.url){
        case "/":
                        fileName = currentFolder + "index.html";
                        break;
        case "/about":
                        fileName = currentFolder + "about.html";
                        break;
        default:
                        fileName = currentFolder + "error.html";
                        request.statusCode = 404;
    }
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
