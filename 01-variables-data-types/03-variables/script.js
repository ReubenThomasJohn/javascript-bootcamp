// Ways to declare a variable

// var, let, const

// In ES2015 (ES6), huge update and var phased out
 

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

// var age = 30; // hoisting
let age = 30;

console.log(age);

// Naming conventions

// only letters, numbers underscores and dollarsigns
// cant start with number

// multi-word formatting

//firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// re-assigning variables
age = 31;

console.log(age);

let score;

score = 1;
console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

// const x = 100;
// x = 200;


let score1;

const arr = [1,2,3,4];

arr.push(5);

console.log(arr);

const person = {
    name: 'Brad'
};

person.name = 'John';

console.log(person);

person.email = 'brad@gmail';

console.log(person);

let a, b, c;
const d= 10,
e = 20, 
f = 30;

console.log(e);
