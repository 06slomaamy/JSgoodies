const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    request.on('data', (chunk) => {})
        .on('end', () => {
            // read a number from a file
            fs.readFile("test.txt", "utf-8", function(err, data){
                response.writeHead(200, {"Content-Type":"text/plain"}); // set header info for response
                data = parseInt(data) + 1; // increment the number read from the file
                data = data.toString();
                fs.writeFile("test.txt", data, function(err){
                    if (err){
                        console.log(err);
                    }
                }); // persist the new value
                response.end("This page was refreshed " + data + " times "); // send back the new number inside a response   
            }); 
        });
}).listen(5029);
