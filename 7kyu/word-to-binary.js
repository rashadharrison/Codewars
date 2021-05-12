/**Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long. */

// const word = 'man';

// const wordToBin = str => {
//  return Array.from(str).reduce((accum, val) => 
//   accum.concat(val.charCodeAt(0).toString(2)), []
// ).map(num => '0'.repeat(8 - num.length) + num)


// };
const arr1 = [1, 3, 5, 7, 9]

const arr2 = [10, 8, 6, 4, 2];

const mergeAndSort = [...arr1, ...arr2]

function result() {
  return mergeAndSort.sort((a, b) => a - b);
}

console.log(result()); //