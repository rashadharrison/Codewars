// write a function that implements the Array.prototype.filter method with using array.prototype.filter()

Array.prototype.filter = function () {
	let array = this;
	let callback = arguments[0];
	let result = [];

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
};