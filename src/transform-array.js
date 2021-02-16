const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr2 = arr.slice();
  
  for(i=0; i<arr2.length; i++){
    if(arr2[i]=='--discard-next'){
      arr2.splice(i, 1)
      arr2.splice(i-1, 1)
    }
    if(arr2[i]=='--discard-next'){
      arr2.splice(i, 1)
      arr2.splice(i+1, 1)
    }
    if(arr2[i]=='--double-next'){
      arr2[i]=arr2[i+1];
    }
    if(arr2[i]=='--double-prev'){
      arr2[i]=arr2[i-1];
    }
  }
  return arr2;
};
