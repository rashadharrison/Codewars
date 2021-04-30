/**In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty. */

const calculate = str => {


  const result = str
		.replace(/plus/gi, '+')
		.replace(/minus/gi, '-')
		.split(' ');
	return eval(result.join('')).toString();
  


}

console.log(calculate('1plus2plus3plus4'));