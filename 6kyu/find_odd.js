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
