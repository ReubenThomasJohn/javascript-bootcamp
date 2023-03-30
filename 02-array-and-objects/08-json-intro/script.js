// Javascript object literals don't have quotes around the keys, but JSON must have them

const post = {
  id: 1,
  title: 'Post 1',
  body: 'This is the body',
};

// Convert to JSON String

const str = JSON.stringify(post); // Turns an object into a JSON string,
// this is what I will send, if I'm sending data to a server. Libraries often times stringify the object automatically

// stringify() is usually necessary when storing to local storage. It can only store strings.
obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post 1',
    body: 'This is the body',
  },
  {
    id: 3,
    title: 'Post 1',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);
