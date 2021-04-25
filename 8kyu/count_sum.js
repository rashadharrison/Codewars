//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
const countPositivesSumNegatives = arr => {
	if (arr === null || arr.length < 1) {
		return [];
	}

	const newarr = [0, 0];

	arr.forEach(num => {
		if (num <= 0) {
			newarr[1] += num;
		} else {
			newarr[0] += 1;
		}
	});

	return newarr;
};
