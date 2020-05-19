console.log("Welcome to the basic server...");

// the inbuilt http module (program) possesses a function (method) called createServer, which we want to use

// first import the module, then get its createServer method (3 alternative ways of coding this are shown below...)
const httpProgram = require("http"); // evaluates to the imported module (program)
const createServer = httpProgram.createServer; // evaluates to a property (a method/function) of the program object
const server = createServer(); // executing the function returns a server object

// alternative
/* ===========
const createServer = require("http").createServer;
const server = createServer();

*/

// and another alternative
/* =======================
const {createServer} = require("http"); // gets a property which is a function
const server = createServer();

*/

// and yet another alternative
/* ===========================

const server = require("http").createServer(); // yet another way... note the final brackets on RHS... we're CALLING the function


*/

const PORT = process.env.PORT || 5000; // use the inbuilt property for port if it exists, otherwise 5000
// (process is a global object in Node.JS - no need for a require to import it)

// using UPPERCASE-ONLY variable/constant names is a common JS style for GLOBAL variables/constants and for 
// "true" constants like PI, although not everyone follows this convention

// use the server's on() method to define event handling
// the lab instructions use an arrow function (lambda function) for the callback arg (lambdas are excellent!)
// here I use an anonymous explicit function instead as an alternative
server.on("request", function(request, response){
    response.end("Greetings, Earthling!");
});


// use the server's listen() method to start it listening for incoming HTTP requests
server.listen(PORT, function(){
    console.log("Listening for requests on port " + PORT);
});
