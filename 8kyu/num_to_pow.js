//The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power) {
  return power > 0 ? number * numberToPower(number, power - 1) : 1;
}