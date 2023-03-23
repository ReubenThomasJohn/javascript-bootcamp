let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = 'Hello World'

x = s.length // length is a property/attribute and not a method so no need of ()

x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('W');

x = s.substring(0, 4);

x = s.substring(7);

x = s.slice(-11, -6);


x = '           Hello World' 
x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

x = s.valueOf();

x = s.split(' ');
x = s.split('');



console.log(x);