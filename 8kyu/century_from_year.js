//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
const century = year =>
	year < 1900 ? Math.floor(year / 100 + 1) : Math.ceil(year / 100);
