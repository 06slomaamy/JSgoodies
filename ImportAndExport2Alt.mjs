
// utility containing some highly advanced mathematical functions (not really...)

function cube(x){
    return x * x * x;
}

function tenthPowerOf(x){
    return x * cube(cube(x));
}

const strongestAvenger = "Either Thor or Hulk or Captain Marvel";

// make these functions available to other modules as NAMED EXPORTS 
// (i.e. no name-value pairs, just variable names and function names):

export {cube, tenthPowerOf, strongestAvenger};
