//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
const invert = arr => arr.map(num => (num > 0 ? ~num + 1 : ~num + 1));
