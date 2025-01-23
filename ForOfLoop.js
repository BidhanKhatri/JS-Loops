// for of loop is used with arrays.
// it is used to iterate over the values of an array.
// we can access the value of an array using for of loop

// Syntax: for (let value of array){ //code to be executed }

// Example:

let hospitals = ["Bird Hospital", "Teaching Hospital", "Gangalal Hospital"];

for (let value of hospitals) {
  console.log(value); // Bird Hospital, Teaching Hospital, Gangalal Hospital
}

// difference between for in loop and for of loop is that for in loop is used with objects and for of loop is used with arrays.
// but note that for in loop can be used with arrays as well.
