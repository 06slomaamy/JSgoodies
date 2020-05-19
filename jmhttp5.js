console.log("Welcome to the basic server, ready to give you some lovely HTML...");

const server = require("http").createServer();
const PORT = process.env.PORT || 5004;


// we can set metadata on the response header... here we send JSON, as in a REST API
server.on("request", function(request, response){
    const today = new Date();
    const day = today.getDate(); // day in month as number
    const month = today.getMonth() + 1; // default is January = 0, February = 1 etc.
    const year = today.getFullYear();

    const folder = __dirname + "/";
    const homePage = "<html><head></head><body><h1>Amazing home page</h1><p>Are you amazed yet?</p>" + 
                        "<p>It's " +  day + "/" + month + "/" + year + " today.</p>" +
                        "<p>Why not <a href='./about'>check us out</a>?</p>" +
                        "</body></html>";

    const aboutPage = "<html><head></head><body><h1>Who we are</h1><p>We are Team Amazing.</p>" + 
                        "<p>Home of the most passionate JavaScript superheroes on the face of the planet. JS rocks!</p>" +
                        "<p>Return to <a href='./'>home page</a>.</p>" +
                        "</body></html>";

    const errorPage = "<html><head></head><body><h1>OOPS!</h1><p>We are so sorry...</p>" + 
                        "<p>This page has been annihilated.</p>" +
                        "</body></html>";

    // media type... alternatives include: text/html, text/xml, image/jpeg, audio/mpeg, application/json
    response.setHeader("content-type", "text/html");
    let stringToSend = null;
    switch (request.url){
        case "/":
                        stringToSend = homePage;
                        break;
        case "/about":
                        stringToSend = aboutPage;
                        break;
        default:
                        stringToSend = errorPage;
                        request.statusCode = 404;
    }

    // media type... alternatives include: text/html, text/xml, image/jpeg, audio/mpeg, application/json
    response.setHeader("content-type", "text/html"); 
    // send string of data
    response.end(stringToSend);
});


// use the server's listen() method to start it listening for incoming HTTP requests
server.listen(PORT, function(){
    console.log("Listening for requests on port " + PORT);
});
