const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.separator) options.separator = "+";
  let addition;
  if (options.addition === undefined) {
    addition = Array(options.additionRepeatTimes).fill(options.addition).join(`${options.additionSeparator}`);
  } else {
    addition = Array(options.additionRepeatTimes).fill(`${options.addition}`).join(`${options.additionSeparator}`);
  }
  const string = Array(options.repeatTimes).fill(`${str}${addition}`).join(`${options.separator}`);
  return string;
}

module.exports = {
  repeater
};
