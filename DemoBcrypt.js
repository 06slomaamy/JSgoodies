const bcrypt = require("bcrypt");

var userPwd = "my secret password";
var badPwd = "bad password";
const salt = 10;

// synchronous function: our stack blocks until completed
let hash = bcrypt.hashSync(userPwd, salt); // synch() is the asynchronous alternative (with a callback, of course)

console.log("Hashed password is " + hash);

function comparePasswords(enteredPassword, storedHash){
    if (bcrypt.compareSync(enteredPassword, storedHash)){
        return "We have a match!";
    } else {
        return "Incorrect password";
    }
}

console.log("First attempt: ");
console.log(comparePasswords(userPwd, hash));
console.log("Second attempt: ");
console.log(comparePasswords(badPwd, hash));
