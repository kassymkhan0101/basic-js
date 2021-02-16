const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(k) {
  if(k==''){
    return 'Unable to determine the time of year!';
  }
  throw new CustomError('Not implemented');
  let mon = getMonth(k)
  if(mon==0 || mon==1 ||mon==2){
    return 'winter';
  }else if(mon==3 || mon==4 ||mon==5){
    return 'spring';
  }else if(mon==6 || mon==7 ||mon==8){
    return 'summer';
  }else if(mon==9 || mon==10 ||mon==11){
    return 'autumn';
  }else{
    throw new Error('Error');
  }
};
