//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

const abbrevName = str =>
	str
		.split(' ')
		.map(name => name[0].toUpperCase())
		.join('.');
