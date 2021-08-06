//Given an array of ones and zeroes, convert the equivalent binary value to an integer

const converToInteger = arr =>  arr.reduce((acc, val) => acc * 2 + val, 0);
