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
