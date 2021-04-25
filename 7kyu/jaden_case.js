

String.prototype.toJadenCase = function () {
	//String.prototype = object
	//convert "this" string to an array
	//convert letter at index 0 to toUpperCase
	//return new array with lowercased letters
	//join both arrays
	return this.split(' ')
		.map(n => {
			return n[0].toUpperCase() + n.slice(1);
		})
		.join(' ');
};
