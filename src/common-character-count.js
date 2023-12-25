const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s2Symbols = s2.split('');
  let indexOfSymbol;
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2Symbols.includes(s1[i])) {
      result += 1;
      indexOfSymbol = s2Symbols.indexOf(s1[i]);
      s2Symbols.splice(indexOfSymbol, 1);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
