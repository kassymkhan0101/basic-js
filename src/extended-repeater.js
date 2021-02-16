

module.exports = function repeater(str, options) {
  if(options.separator==null || options.separator==undefined){
    options.separator='+';
  }
  if(options.additionSeparator==null || options.additionSeparator==undefined){
    options.additionSeparator='|';
  }
  if(options.addition==null || options.addition==undefined){
    options.separator='';
  }
  str = String(str)+(options.addition)+(options.additionSeparator+options.addition).repeat((options.additionRepeatTimes)-1)+(options.separator+str+(options.addition)+(options.additionSeparator+options.addition).repeat((options.additionRepeatTimes)-1)).repeat((options.repeatTimes)-1)
  return str;
  
};
  
