//Step1

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mocking Jay',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
for (let i = 0; i < library.length; i++) {
  library[i].status.read = true;
}

// console.log(library);

// Step 3

const { title: firstBook } = library[0];
console.log(firstBook);

// Step 4

const str = JSON.stringify(library);
console.log(str);
