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