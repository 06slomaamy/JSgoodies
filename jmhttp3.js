console.log("Welcome to the basic server, ready to give you some JSON data...");

const {createServer} = require("http"); // gets a property which is a function
const server = createServer();

const PORT = process.env.PORT || 5002;


// we can set metadata on the response header... here we send JSON, as in a REST API
server.on("request", function(request, response){
    const stringToSend = JSON.stringify({"title": "Harry Potter and the Philosopher's Stone", "author": "J.K. Rowling"});

    // media type... alternatives include: text/html, text/xml, image/jpeg, audio/mpeg, application/json
    response.setHeader("content-type", "application/json"); 
    // send string of data
    response.end(stringToSend);
});


// use the server's listen() method to start it listening for incoming HTTP requests
server.listen(PORT, function(){
	console.log("process.env = " + process.env); // taking a look at the process environment variables
    console.log("Listening for requests on port " + PORT);
});
