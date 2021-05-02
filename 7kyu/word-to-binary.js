/**Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long. */

const word = 'man';

const wordToBin = str => {
 return Array.from(str).reduce((accum, val) => 
  accum.concat(val.charCodeAt(0).toString(2)), []
).map(num => '0'.repeat(8 - num.length) + num)

  

};


