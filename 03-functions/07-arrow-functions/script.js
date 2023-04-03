// Implicit return, lexical scope, and cleaner code
// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => {
  return a + b;
};

// Implicit return
const subtract = (a, b) => a - b;

// Leave off parantheses when only one param there
const double = (a) => a * 2;

// Returning an object
const createObject = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5, 6];

// Arrow function in a callback
// callback: passing one function into another function
numbers.forEach(function (n) {
  console.log(n);
});

numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(double(2));
console.log(createObject());
