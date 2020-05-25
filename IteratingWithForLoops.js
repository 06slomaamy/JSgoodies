/**
 * Array to iterate through: 
 */

myCars = [{make: "Ford", id: 123, maxSpeed: 99},
			{make: "Audi", id: 125, maxSpeed: 101},
			{make: "BMW", id: 127, maxSpeed: 201}];

// basic for loop (and using var instead of let), incrementing the loop index

for (var i = 0; i < myCars.length; i++){
	console.log("Make is " + myCars[i].make + " id is " + 
			myCars[i].id + " with max. speed of " + myCars[i].maxSpeed);
}

// for-in loop to access the element index iteratively
for (i in myCars){
	console.log("Make is " + myCars[i].make + " id is " + 
			myCars[i].id + " with max. speed of " + myCars[i].maxSpeed);	
}

// ES6: - block scoped (actually, iteration-scoped) version of basic for-loop

for (let i = 0; i < myCars.length; i++){
	console.log("Make is " + myCars[i].make + " id is " + 
			myCars[i].id + " with max. speed of " + myCars[i].maxSpeed);
}

// OFTEN RECOMMENDED (JM):
//ES6: - for-of loop through any Iterable object

for (car of myCars){
	console.log("Make is " + car.make + " id is " + 
			car.id + " with max. speed of " + car.maxSpeed);
}
