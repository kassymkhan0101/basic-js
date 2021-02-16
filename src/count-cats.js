const CustomError = require("../extensions/custom-error");
module.exports = function countCats(backyard) {
  let c = 0;
  for(i=0; i<backyard.length; i++){
    for(j=0; j<backyard[i]; j++){
      
      if(backyard[i][j]=="^^"){
        c += 1;
        
       ;
      }
    }
  }
  return c;
};
