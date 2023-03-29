let x;

const arr = [34, 55, 95, 20, 15];

arr.push(1);

arr.pop();

arr.unshift(99);

arr.shift();

arr.reverse();

x = arr.includes(15);

x = arr.indexOf(340); // if not there, returns -1

x = arr.slice(1, 3);

// x = arr.splice(1, 4);

x = arr.splice(1, 4).reverse().toString().charAt(0);

x = console.log(x, arr);
