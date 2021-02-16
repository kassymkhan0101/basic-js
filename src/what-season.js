const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(k) {
  let c = k.getMonth();
  if(c==0 || c==1 ||c==2){
    return 'winter';
  }else if(c==3 || c==4 ||c==5){
    return 'spring';
  }else if(c==6 || c==7 ||c==8){
    return 'summer';
  }else{
    return 'autumn'
  }
 
  
};
