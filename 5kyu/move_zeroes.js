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
