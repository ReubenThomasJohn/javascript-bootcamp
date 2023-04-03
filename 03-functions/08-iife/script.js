// iife - immediately invoked function expressions
// create, define and execute the function at the same time

// do this to avoid global scope pollution
// const user = 'John';

(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// hello();

(function (name) {
  console.log('Hello ' + name);
})('Shwarma');

(function hello() {
  console.log('HelloNamedIIFE');
})();
