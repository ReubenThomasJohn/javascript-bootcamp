// way to group code together
function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello('bete'); // invoking/calling a function

function add(num1, num2) {
  console.log(`${num1} + ${num2} =`, num1 + num2); // declaring a function
}

add(1.5, 2);

function subtract(num1, num2) {
  output = num1 - num2;
  //   console.log(`${num1} - ${num2} =`, num1 - num2);
  return output;
  console.log(`${num1} - ${num2} =`, num1 - num2);
}

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
