

module.exports = function repeater(str, options) {

  if(typeof options.separator==='undefined'){
    options.separator='+';
  }
  if(typeof options.additionSeparator==='undefined'){
    options.additionSeparator='|';
  }
  if(typeof options.addition==='undefined'){
    options.separator='';
  }
  str = String(str)+(options.addition)+(options.additionSeparator+options.addition).repeat((options.additionRepeatTimes)-1)+(options.separator+str+(options.addition)+(options.additionSeparator+options.addition).repeat((options.additionRepeatTimes)-1)).repeat((options.repeatTimes)-1)
  return str;
  
};
  
