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
