//Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
const max = arr => arr.reduce((accum, val) => Math.max(accum, val));
const min = arr => arr.reduce((accum, val) => Math.min(accum, val));
