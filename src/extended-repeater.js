const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  throw new CustomError('Not implemented');
  str = str+(options.addition)+(options.additionSeparator+options.addition)*(options.additionRepeatTimes-1)+(options.separator+str+(options.addition)+(options.additionSeparator+options.addition)*(options.additionRepeatTimes-1))*(options.repeatTimes-1)
  return str;
  
};
  
