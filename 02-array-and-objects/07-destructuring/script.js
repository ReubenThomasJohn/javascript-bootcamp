const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

const person1 = {
  firstName,
  lastName,
  age,
};

// Destructuring

const todo = {
  id: 1,
  title: 'Take out the trash',
  user: {
    name: 'John',
  },
};

// const id = todo.id;
const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(title, todoId);

// Destructure arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
