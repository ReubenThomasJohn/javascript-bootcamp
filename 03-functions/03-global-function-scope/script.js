// scope refers to the current context of a specific piece of code

// global variables can be accessed from anywhere. Ex. window
// alert('Hello');
console.log(window.innerWidth);

const x = 100;

console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1;
  const y = 50;
  console.log(y, 'in function');
}

add();
console.log(y);
