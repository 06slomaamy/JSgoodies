
// utility containing some highly advanced mathematical functions (not really...)

cube = function (x){
    return x * x * x;
}

tenthPowerOf = function (x){
    return x * cube(cube(x));
}

// make these functions available to other modules:
module.exports = {cube: cube, tenthPowerOf: tenthPowerOf, strongestAvenger: "Either Thor or Hulk or Captain Marvel"}
