// for in loop is used with objects.
// it is used to iterate over the properties of an object.
// we can access the key and value of objects using for in loop

// Syntax: for (let key in object){ //code to be executed }

// Example:

const person = {
  name: "Ram",
  age: 25,
};

for (let keys in person) {
  //console.log(keys);        // name, age
  //console.log(person[keys]);    // Ram, 25
  console.log(keys, person[keys]); // name Ram, age 25
}

// for in loop can be used with arrays as well for getting index and value of an array

// Example:

const animals = ["Cat", "Dog", "Horse"];

for (let index in animals) {
  //console.log(index); // 0, 1, 2
  console.log(animals[index]); // Cat, Dog, Horse
}
