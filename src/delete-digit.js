const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nToStr = n.toString();
  const possibleNumbers = [];
  for (let i = 0; i < nToStr.length; i++) {
    const digits = nToStr.split('');
    digits.splice(i, 1);
    possibleNumbers.push(digits.join(''));
  }
  possibleNumbers.sort((a, b) => b - a);
  return +possibleNumbers[0];
}

module.exports = {
  deleteDigit
};
