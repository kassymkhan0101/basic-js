const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(k) {
  let c = k.getMonth();
  if(c==11 || c==0 ||c==1){
    return 'winter';
  }else if(c==2 || c==3 ||c==4){
    return 'spring';
  }else if(c==5 || c==6 ||c==7){
    return 'summer';
  }else{
    return 'autumn'
  }
 
  
};
