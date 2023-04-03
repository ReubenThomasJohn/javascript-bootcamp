// Function Decleration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));

console.log(addDollarSign(200));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addDollarSign(200));

// They are called the same way, but differs in hoisting
// Step that looks for function first before running the actual code.
