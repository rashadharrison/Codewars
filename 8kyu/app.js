/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

const lovefunc = (num1, num2) => {
	return (num1 + num2) % 2 === 1 ? true : false;
};

/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.reduce(function (accum, val) {
			return accum < val ? accum : val;
		});
	}
}


/**Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings: */


const areYouPlayingBanjo = name => name[0] === 'R' || name[0] === 'r' ? name + ' plays banjo' : name + ' does not play banjo'

/**Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

 */

const sayHello = (name, city, state) =>
  `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
  

  /**I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here? */

const swapValues = arr => arr.reverse();


/**Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
const even_or_odd = n => (n % 2 ? 'Odd' : 'Even');

// convert number to string

const numberToString = num => num.toString();

//multiply two numbers

const multiply = (num1, num2) => num1 * num2;

//convert number to a reversed array of digits

const digitize = n => Array.from(String(n), Number).reverse();

/**In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats are considered UNeven for this kata.

 */
  const testEven = n => {
		if (n % 2 === 0) {
			return true;
		} else if (n < 0 || n % 2 !== 0) {
			return false;
		}
  };
 
  //convert number to string
const stringToNumber = str => +str;
  
//reverse list order
const reverseList = n => n.reverse('');

/**Complete the solution so that it reverses all of the words within the string passed in.

Example: */

const reverseWords = s => s.split(' ').reverse('').join(' ');

/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/
const squareSum = n => {
	return n.map(item => item * item).reduce((sum, item) => sum + item, 0);
};


//is n divisible by x and y?

const isDivisible = (n, x, y) => (n % x === 0 && n % y === 0 ? true : false);

//remove string spaces 

const noSpace = x => x.replace(/\s+/g, '');

//reverse words in string

const reverse = str => str.split(' ').reverse().join(' ');

/** You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */
const check = (a, x) => (a.includes(x) ? true : false);

/**Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

const sum = arr => arr.reduce((acc, item) => acc + item, 0);

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
const simpleMultiplication = n => (n % 2 ? n * 9 : n * 8);


/**Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique. */

const find = (array, element) =>
	!array.includes(element) ? 'Not found' : array.indexOf(element);


  /**You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2". */
function shortenToDate(longDate) {
	return longDate.split(',')[0];
}

//Get the mean of an array

function getAverage(marks) {
	return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);

}

/**Write a function called repeat_str which repeats the given string src exactly count times. */
const repeatStr = (n, s) => s.repeat(n);
	
/**You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0. */

const index = (arr, n) => (n >= arr.length ? -1 : Math.pow(arr[n], n));


//The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power) {
	return power > 0 ? number * numberToPower(number, power - 1) : 1;
}

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

/**Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */

const basicOp = (operation, value1, value2) => {
	switch (operation) {
		case '+':
			return value1 + value2;
			break;
		case '-':
			return value1 - value2;
			break;
		case '*':
			return value1 * value2;
			break;
		case '/':
			return value1 / value2;
			break;
	}
	// more clever than my solution => basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}` )
};


//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
const invert = arr => arr.map(num => (num > 0 ? ~num + 1 : ~num + 1));


//Write a function to split a string and convert it into an array of words. For example:
const stringToArray = s => s.split(' ');

/**A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */

const hero = (bullet, dragon) => (bullet >= dragon * 2 ? true : false);

//Write a function which takes a number and returns the corresponding ASCII char for that value.
const getChar = str => String.fromCharCode(str);

/**It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */
const removeChar = str => str.substring(1, str.length - 1);


//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = num => {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
};


//Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
const max = arr => arr.reduce((accum, val) => Math.max(accum, val));
const min = arr => arr.reduce((accum, val) => Math.min(accum, val));

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

const countingSheep = arr => {
	let counter = 0;
	arr.forEach(function (el) {
		if (el === true) {
			counter++;
		}
	});

	return counter;
};

//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
const century = year =>
	year < 1900 ? Math.floor(year / 100 + 1) : Math.ceil(year / 100);


	//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

	const abbrevName = str =>
		str
			.split(' ')
			.map(name => name[0].toUpperCase())
			.join('.');


//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
			const countPositivesSumNegatives = arr => {
				if (arr === null || arr.length < 1) {
					return [];
				}

				const newarr = [0, 0];

				arr.forEach(num => {
					if (num <= 0) {
						newarr[1] += num;
					} else {
						newarr[0] += 1;
					}
				});

				return newarr;
			};

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
			const sumMix = x => x.map(num => +num).reduce((acc, val) => acc + val);