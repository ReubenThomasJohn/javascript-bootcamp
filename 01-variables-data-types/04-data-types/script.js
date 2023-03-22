/*

Primitive Types

String
Number (Int and Float)
Boolean
Null (not undefined; intentionally empty)
Undefined (Not defined, assigned)
Symbol (Added in ES6 - constructor returns a unique symbol)
BigInt (Recently added, really large Numbers)

Reference Types (Objects)

Object literals, arrays functions

*/

/*

JS is dynamically-typed
TS allows static-typing. Makes code more 
verbose, and less prone to errors. Is a superset of JS

*/

const firstName = 'Sara';

const age = 30;

const hasKids = true

const aptNumber = null;

// let score;
const score = undefined;

const id = Symbol('id')

const n = 9007199254740991n;

const numbers = [1,2,3,4];

const person = {
    name: 'reuben',
};

function sayHello() {
    console.log('Hello');
}

const output = sayHello();

// Reference Types




console.log(output, typeof(output));


