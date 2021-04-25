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
