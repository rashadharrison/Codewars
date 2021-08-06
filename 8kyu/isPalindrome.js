//Implement a function that checks if number or string is a palindrome.

const isPalindrome = (s) => {
  if (typeof s === 'number') {
    return s === Number(s.toString().split('').reverse().join(''));
  }
  if (typeof s === 'string') {
    return s === s.split('').reverse().join('');
  }
  
}