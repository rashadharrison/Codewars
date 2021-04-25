//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
	const arr = numbers.split(' ').map(Number);
	return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
