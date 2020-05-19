console.log("Welcome to the basic server, ready to give you some lovely HTML...");

const server = require("http").createServer();
const PORT = process.env.PORT || 5003;


// we can set metadata on the response header... here we send JSON, as in a REST API
server.on("request", function(request, response){
    const today = new Date();
    const day = today.getDate(); // day in month as number
    const month = today.getMonth() + 1; // default is January = 0, February = 1 etc.
    const year = today.getFullYear();

    const stringToSend = "<html><head></head><body><h1>Amazing home page</h1><p>Are you amazed yet?</p>" + 
                            "<p>It's " +  day + "/" + month + "/" + year + " today.</p></body></html>";

    // media type... alternatives include: text/html, text/xml, image/jpeg, audio/mpeg, application/json
    response.setHeader("content-type", "text/html"); 
    // send string of data
    response.end(stringToSend);
});


// use the server's listen() method to start it listening for incoming HTTP requests
server.listen(PORT, function(){
    console.log("Listening for requests on port " + PORT);
});
