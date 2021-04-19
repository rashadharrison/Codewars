/**Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

function findOdd(A) {
	let result;
	const counter = {};
	A.forEach(number => {
		if (counter[number]) {
			counter[number]++;
		} else {
			counter[number] = 1;
		}
	});
	for (let number in counter) {
		if (counter[number] % 2 === 1) {
			result = number;
		}
	}
	return Number(result);
}



/**If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

Courtesy of projecteuler.net */

function solution(number) {
	let result = 0;
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			result += i;
		}
	}
	return result;
}


/**From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions: */

function thirt(n) {
	// your code
	const dict = [1, 10, 9, 12, 3, 4];
	let sum = n;
	while (1) {
		let result = sum;
		sum = sum.toString().split``.reverse().join``.split``
			.map((v, i) => {
				v = v * dict[i % 6];
				return v;
			})
			.reduce((a, b) => a + b, 0);
		if (sum === result) {
			break;
		}
	}
	return sum;
}

/**The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function. */

const narcissistic = value => {
	let arr = value
		.toString()
		.split('')
		.map(s => parseInt(s));
	let sum = 0;
	for (let i = 0; sum < value; i++) {
		sum = 0;
		arr.forEach(n => (sum += Math.pow(n, i)));
		if (sum === value) {
			return true;
		}
	}
	return false;
};

/**Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */


function digital_root(n) {
	if (n < 10) return n;
	return digital_root(
		n
			.toString()
			.split('')
			.reduce((acc, d) => {
				return acc + +d;
			}, 0)
	);
}



//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(arr) {
return arr.split(' ').map(word => word.length >= 5 ? [...word].reverse().join(''): word).join(' ')
  
} //FSA