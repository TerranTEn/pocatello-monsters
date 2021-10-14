// Simple objects are key-value pairs
// Technical name: object literal syntax

const person = {
  name: { first: "John", last: "Hunt" },
  age: 28,
  address: "344 S 11th",
  message: () =>
    `Hi my name is ${person.name.first} ${person.name.last} my age is ${person.age}`, // interpolated string
};

console.log(person.message());

console.log(person);

// Adding a new property to an existing object
person.gender = "Male";
console.log(person);
