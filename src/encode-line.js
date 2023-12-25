const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  if (str.length !== 0) {
    str.match(/(.)\1*/g).forEach((subStr) => {
      if (subStr.length === 1) {
        result += subStr;
      } else {
        result += `${subStr.length}${subStr[0]}`;
      }
    });
  }
  return result;
}

module.exports = {
  encodeLine
};
