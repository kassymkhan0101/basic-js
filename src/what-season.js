const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(k) {
  if(k==''){
    return 'Unable to determine the time of year!';
  }
  throw new CustomError('Not implemented');
  let mon = getMonth(k)
  if(k==0 || k==1 ||k==2){
    return 'winter';
  }else if(k==3 || k==4 ||k==5){
    return 'spring';
  }else if(k==6 || k==7 ||k==8){
    return 'summer';
  }else if(k==9 || k==10 ||k==11){
    return 'autumn';
  }else{
    throw new Error('Error');
  }
};
