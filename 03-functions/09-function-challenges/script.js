// Challenge 1
function getCelsius(tempF) {
  return (tempF - 32) * (5 / 9);
}

console.log(getCelsius(32));

const getCelsiusOneLine = (tempF) => ((tempF - 32) * 5) / 9;

console.log(`The temp is ${getCelsiusOneLine(32)} \xB0C`);

// Challenge 2

// function getMinMax(arr) {
//   let min = 100000000000000;
//   let max = 0;
//   arr.forEach(function (n) {
//     // console.log(n);
//     if (n <= min) {
//       console.log(n);
//       min = n;
//     }
//     if (n >= max) {
//       max = n;
//     }
//   });
//   return {
//     min: min,
//     max: max,
//   };
// }

// arr = [1, 2, 3, 4, 5, 6];
// console.log(getMinMax(arr));

function getMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(max);
  return {
    min,
    max,
  };
}

arr = [1, 2, 3, 4, 5, 6];
console.log(getMinMax(arr));

// Challenge 3

// (function (length, breadth) {
//   console.log(`Area = ${length * breadth}`);
// })(2, 3);

((length, width) => {
  const area = length * width;

  const output = `The area of a a rectange with a length ${length} \
  and width ${width} is ${area}.`;

  console.log(output);
})(10, 5);
