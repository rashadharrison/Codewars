//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = arr => {
	let count = [];
	arr.forEach((el, i) => (el === 0 ? count.push(i) : void 0));
	count = count.reverse();
	zeroArr = count.map(() => 0);
	count.forEach(el => arr.splice(el, 1));
	arr.push(...zeroArr);
	return arr;
};

/**Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests. */

const firstNonRepeatingLetter = s => {
	if (s === '') return '';

	let result = '';
	let repeatLetter = s
		.toLowerCase()
		.split('')
		.sort()
		.map(el => {
			if (result !== el) {
				result = el;
				return '';
			} else {
				return el;
			}
		})
		.join('');
	for (let i = 0; i < s.length; i++) {
		if (repeatLetter.indexOf(s[i].toLowerCase()) === -1) {
			return s[i];
		}
	}
	return '';
};