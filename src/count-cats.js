const CustomError = require("../extensions/custom-error");

module.exports = function countCats(k) {
  let c  = 0
  for(i=0; i<k.length; i++){
    for(j=0; j<i.length; j++){
      if(k[i][j]=="^^"){
        c++;
        return c;
      }
    }
  }
};
