const myString = 'developer';

let myNewString;

// Sol 1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);

// Sol 2
myNewString = myString[0].toUpperCase() + myString.substring(1);

console.log(myNewString);

// Sol 3
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);



