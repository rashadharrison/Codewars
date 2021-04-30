/**Write a function filterLongWords that takes a string sentence and an integer n.

Return a list of all words that are longer than n. */

const filterLongWords = (sentence, n) => {
	const newarr = [];
	const words = sentence.split(' ');
	words.map(word => {
		if (word.length > n) {
			newarr.push(word);
		}
	});

	return newarr;
};