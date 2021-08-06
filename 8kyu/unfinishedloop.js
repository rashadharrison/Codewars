/*Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!*/

function createArray(number) {
  let array = [];
  for (let i = 1; i <= number; i++) {
    array.push(i);
  }
  return array;
}