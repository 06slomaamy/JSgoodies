console.log("import and export demo");

// use require() to import our other module containing useful utilities (note the filepath arg)


// the require function executes the referenced module and returns the exports object
const utilities = require("./ImportAndExport2.js"); 

// our utilities object now contains useful functions and important data)

const strongestHero = utilities.strongestAvenger;

const power3 = utilities.cube;
const power10 = utilities.tenthPowerOf;

// now let's execute our imported utilities:
console.log("Strongest hero = " + strongestHero);

console.log("power3 = " + power3);
console.log("power10 = " + power10);

console.log("power3(2) = " + power3(2));
console.log("power10(2) = " + power10(2));

