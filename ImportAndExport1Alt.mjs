console.log("import and export demo... alternate version using ES6 import");

// use require() to import our other module containing useful utilities (note the filepath arg)

/*
======================================================================================================
NOTE: FOR ANY BUT THE MOST RECENT VERSIONS OF Node.JS, THE FILES MUST BE SAVED WITH A .mjs EXTENSION,
AND INVOKED LIKE THIS:
                                node --experimental-modules ImportAndExport1Alt.mjs

======================================================================================================
*/


// this is the cleanest syntax for ES6 imports:
import {cube, tenthPowerOf, strongestAvenger} from "./ImportAndExport2Alt.mjs"; 


// now let's execute our imported utilities:
console.log("Strongest Avenger = " + strongestAvenger);
console.log("cube(2) = " + cube(2));
console.log("tenthPowerOf(2) = " + tenthPowerOf(2));

