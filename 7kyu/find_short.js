//Simple, given a string of words, return the length of the shortest word(s).
const findShort = s => Math.min(...s.split` `.map(w => w.length)) | 0;
