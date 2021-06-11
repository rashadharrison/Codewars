/**Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

const descendingOrder = n => parseInt(String(n).split('').sort((a, b) => a - b).reverse().join(''))