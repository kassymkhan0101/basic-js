const CustomError = require("../extensions/custom-error");
module.exports = function countCats(backyard) {
  
  for(i=0; i<backyard.length; i++){
    for(j=0; j<i.length; j++){
      
      if(backyard[i][j]=="^^"){
        c += 1;
        
       ;
      }
    }
  }
  return c;
};
