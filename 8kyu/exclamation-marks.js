//Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

const remove = s => (s.endsWith('!') ? s.substring(0, s.length - 1) : s);






