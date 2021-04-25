/**In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */

function isNumber(value) {
	return typeof value === 'number';
}

function filter_list(l) {
	let result = l.filter(isNumber);

	return result;
}
