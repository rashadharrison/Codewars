//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

const divisibleBy = (numbers, divisor) =>
	numbers.filter(num => num % divisor === 0);
