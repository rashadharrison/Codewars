/**Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e. */

function friend(friends) {
	return friends.filter(foo => foo.length === 4);
}


/**his is a kata series that you can only solve using recursion.
##1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion. */
const factorial = n => {
	if (n < 0) return;
	if (n === 0) return 1;
	return n * factorial(n - 1);
};

/**In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */

function isNumber(value) {
	return typeof value === 'number';
}

function filter_list(l) {
	let result = l.filter(isNumber);

	return result;
}

/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/

function disemvowel(str) {
	let result = str.split('');
	return result
		.map(letter => {
			if (/[aeiouAEIOU]/.test(letter)) {
				letter = '';
			} else {
				return letter;
			}
		})
		.join('');
}

/**A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7. */

function seven(m) {
	let times = 0;
	while (('' + m).length > 2) {
		times++;
		m = Math.floor(m / 10) - (m % 10) * 2;
	}
	return [m, times];
}


/*Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.*/

const isSquare = n => (Math.sqrt(n) % 1 === 0 ? true : false); 

/**Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example: */

function greet(name) {
	return name === '' || name === null ? null : `hello ${name}!`;
}


/**Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num) {
	//may the code be with you
	let newArr = Array.from(String(num), Number);

	let n = newArr.map(num => num * num);

	return Number(n.join(''));
}


 /**Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers. */

const toNumberArray = num => Array.from(num, Number);




String.prototype.toJadenCase = function () {
	//String.prototype = object
	//convert "this" string to an array
	//convert letter at index 0 to toUpperCase
	//return new array with lowcased letters
	//join both arrays
	return this.split(' ')
		.map(n => {
			return n[0].toUpperCase() + n.slice(1);
		})
		.join(' ');
};

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
	const arr = numbers.split(' ').map(Number);
	return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

//Simple, given a string of words, return the length of the shortest word(s).
const findShort = s => Math.min(...s.split` `.map(w => w.length)) | 0;