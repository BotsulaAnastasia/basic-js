const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = String(n).split('').reduce(((acc, el) => acc += Number(el)), 0);
  while (String(result).length > 1) {
    result = getSumOfDigits(result);
  }
  return result;
}

module.exports = {
  getSumOfDigits
};
