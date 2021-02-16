const CustomError = require("../extensions/custom-error");
let c = 0;
module.exports = function countCats(backyard) {
  throw new CustomError('Not implemented');
  
  for(i=0; i<backyard.length; i++){
    for(j=0; j<i.length; j++){
      
      if(backyard[i][j]==="^^" || backyard[i][j]==='^^'){
        c += 1;
        return c;
      }
    }
  }
};
