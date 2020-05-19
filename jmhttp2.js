console.log("Welcome to the basic server...");

// the inbuilt http module (program) possesses a function (method) called createServer, which we want to use
const createServer = require("http").createServer;
const server = createServer();

const PORT = process.env.PORT || 5001; // use the inbuilt property for port if it exists, otherwise 5000
// (process is a global object in Node.JS - no need for a require to import it)

// use the server's on() method to define event handling
// we can retrieve (meta)data from the request header...

// note the syntax: on() is an asynchronous function, and the 2nd arg to on() is a callback function
// This use of a 2nd arg for callbacks is common in JS, but it's not the only way.


/*
    note on asynch functions and callbacks... our environment is (theoretically) single-threaded, both in Node.JS
    and when running client-side code in a browser.

    This means there is only STACK executing the functions (as stack frames)

    When a function is finished executing, before it's popped off the stack, its callback is placed on a task QUEUE.
    
    Although the main JS environment contains only one thread/stack, there is a 2nd program running concurrently, 
    called the EVENT LOOP. Its pseudo-code looks something like this:

                while (true){
                    if (stack.isEmpty()){
                        stack.push(queue.remove()); // take the oldest element off the queue and put it on the stack to execute
                    }
                }

    Note that a callback cannot execute until the stack is empty.

    This relatively lightweight asynch processing is (maybe surprisingly) efficient, allowing Node.JS as a 
    web server to process many requests (from many users/devices) without spawning a new thread for each 
    incoming request and processing it synchronously, which is an approach used by other technologies.

*/ 


server.on("request", function(request, response){
    response.write("Server received the following header metadata in the request that you sent...");
    response.write("Accept-Language is set to " + request.headers["accept-language"]);
    response.write("   Connection is set to " + request.headers["connection"]);
    response.end();
});


// use the server's listen() method to start it listening for incoming HTTP requests
server.listen(PORT, function(){
    console.log("Listening for requests on port " + PORT);
});
