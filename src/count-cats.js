const CustomError = require("../extensions/custom-error");
let c = 0;
module.exports = function countCats(k) {
  throw new CustomError('Not implemented');
  
  for(i=0; i<k.length; i++){
    for(j=0; j<i.length; j++){
      
      if(k[i][j]=="^^"){
        c++;
        return c;
      }
    }
  }
};
